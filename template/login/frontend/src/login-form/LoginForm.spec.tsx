import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event'


//  Common Test Utils
const getFields = () => {
    return {
        account: screen.getByLabelText("Account Locator"),
        username: screen.getByLabelText("Username"),
        password: screen.getByLabelText("Password"),
    }
}

const getLinks = () => ({
    tos: screen.getByText("Terms of Service"),
    privacyPolicy: screen.getByText("Privacy Policy"),
})

const getSignupButton = () => {
    return screen.getByText("Sign Up")
}

const setDummyUserInput = () => {
    const { account, username, password } = getFields();
    userEvent.type(account, 'account');
    userEvent.type(username, 'username');
    userEvent.type(password, 'password');
}

describe("Login Form", () => {
    it("Should Render with Sign-Up Button in Disabled State", () => {
        render(<LoginForm />);
        const signupButton = getSignupButton();
        expect(signupButton.disabled).toBeTruthy();
    })

    it("Should Enable the Button Once all fields have values", () => {
        render(<LoginForm />);
        setDummyUserInput();
        const signupButton = getSignupButton();
        expect(signupButton.disabled).toBeFalsy();
    });

    it("Should User Avatar Once Signup is completed", () => {
        render(<LoginForm />);
        setDummyUserInput();
        const signupButton = getSignupButton();
        userEvent.click(signupButton);
        const msg = screen.getByTestId("successMsg");
        expect(msg.textContent).toBe("Logged in as username");
    })

    it("Should show Correct links", () => {
        render(<LoginForm />);
        const {privacyPolicy, tos} = getLinks();
        expect(tos.href).toBe("https://samooha.tech/")
        expect(privacyPolicy.href).toBe("https://samooha.tech/")
    })
})