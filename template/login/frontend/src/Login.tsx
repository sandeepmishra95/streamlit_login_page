import React, { ReactNode } from "react";
import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib";
import LoginForm from "./login-form/LoginForm";


class Login extends StreamlitComponentBase {
    componentDidMount(): void {
        Streamlit.setFrameHeight(800)
    }

    public render = (): ReactNode => {
        return (
            <LoginForm />
        )
    }
}

export default withStreamlitConnection(Login)
