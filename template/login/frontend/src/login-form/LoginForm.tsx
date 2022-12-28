import React, { useCallback, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import FieldWrapper from "../common/FieldWrapper";
import Input from "../common/Input";

const LOGO_URL: string = "https://static.wixstatic.com/media/cddd8c_dfebb51e4d604e7db2bd77f1cda67b94~mv2.png/v1/fill/w_312,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logos_3x.png";
const DOC_URL: string = "https://samooha.tech";


interface State {
    accountLocator: string,
    username: string,
    password: string,
    showPassword: boolean,
    loggedIn: boolean
}

/**
 * Login Form Component
 * @returns
 */
export default function LoginForm() {
    const [{ accountLocator, username, password, showPassword, loggedIn }, setState] = useState<State>({
        accountLocator: "",
        username: "",
        password: "",
        showPassword: false,
        loggedIn: false
    });

    //  check if signup button needs to be enabled
    const isSignupEnabled = [accountLocator, username, password].every(field => !!field);

    /**
     * handles field change event for common fields
     * @param event 
     */
    const handleFieldChange = useCallback(event => {
        const { id, value } = event.target;
        setState(prevState => {
            return {
                ...prevState,
                [id]: value
            }
        })

    }, [setState]);

    /**
     * Password Visibility toggle Handler 
     * @param event 
     */
    const toggleShowPassword = useCallback(event => {
        setState(prevState => {
            return {
                ...prevState,
                showPassword: !prevState.showPassword
            }
        })

    }, [setState]);

    /**
     * Toggles Logged In status
     * @param event 
     */
    const toggleLoggedin = useCallback(event => {
        setState(prevState => {
            return {
                ...prevState,
                loggedIn: !prevState.loggedIn
            }
        })

    }, [setState]);

    const header = (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 40px 60px 40px" }}>
            <Box
                component="img"
                src={LOGO_URL}
                alt="logo"
                sx={{ width: "250px", objectFit: "cover", marginBottom: "24px" }} />
            {!loggedIn && <Typography variant="h5" gutterBottom>
                Sign up using Snowflake Account
            </Typography>}
        </Box>
    )

    const tosLink = <Link target="_blank" href={DOC_URL} underline="hover"> Terms of Service </Link>;
    const privacyPolicyLink = <Link target="_blank" href={DOC_URL} underline="hover">  Privacy Policy </Link>

    const passwordVisibilityButton = <InputAdornment position="end">
        <IconButton
            aria-label="toggle password visibility"
            onClick={toggleShowPassword}
            edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </InputAdornment>

    const form = (
        <Box data-name="form" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <FieldWrapper>
                <Input variant="filled" onChange={handleFieldChange} value={accountLocator} id="accountLocator" label="Account Locator" fullWidth />
            </FieldWrapper>
            <FieldWrapper>
                <Input variant="filled" onChange={handleFieldChange} value={username} id="username" label="Username" fullWidth />
            </FieldWrapper>
            <FieldWrapper>
                <Input
                    variant="filled"
                    onChange={handleFieldChange}
                    value={password}
                    id="password"
                    label="Password"
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{ endAdornment: passwordVisibilityButton }} />
            </FieldWrapper>
            <Box sx={{ marginTop: "20px" }}>
                <Typography variant="subtitle1">
                    By Signing up, I agree to the {tosLink} and {privacyPolicyLink}
                </Typography>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
                <Button sx={{ width: "120px" }} variant="contained" disabled={!isSignupEnabled} onClick={toggleLoggedin}>
                    Sign Up
                </Button>
            </Box>
            <Box sx={{ marginTop: "60px", textAlign: "center", width: "302px" }}>
                <Typography variant="subtitle1">
                    Note: you can later login to Samooha as a <b>Provider</b> or a <b>Consumer</b>
                </Typography>
            </Box>
        </Box>
    )

    const loggedInMsg = <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ width: "150px", height: "150px", marginBottom: "20px", bgcolor: "#6839B6" }}>{username.slice(0, 2).toUpperCase()}</Avatar>
        </Box>
        <Typography variant="h6" data-testid="successMsg">Logged in as <Box sx={{ textDecoration: "underline", display: "inline" }}>{username}</Box></Typography>
        <Box sx={{ marginTop: "20px" }}>
            <Button variant="outlined" onClick={toggleLoggedin}>
                Logout
            </Button>
        </Box>
    </Box>


    return (
        <Card variant="elevation" raised elevation={2} sx={{ minWidth: 275, margin: "15px", height: "750px", padding: "0 50px", borderRadius: "12px" }}>
            <CardContent>
                {header}
                {loggedIn ? loggedInMsg : form}
            </CardContent>
        </Card>
    )
}