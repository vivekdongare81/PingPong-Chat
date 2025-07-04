import {TOKEN} from "../../config/Config";
import {useDispatch, useSelector} from "react-redux";
import {AuthReducerState, LoginRequestDTO} from "../../redux/auth/AuthModel";
import {useNavigate} from "react-router-dom";
import React, {Dispatch, useEffect, useState} from "react";
import {currentUser, loginUser} from "../../redux/auth/AuthAction";
import {RootState} from "../../redux/Store";
import {Button, TextField} from "@mui/material";
import styles from "./Register.module.scss";


// TODO: Show error if something went wrong (like wrong mail/ pw)
const SignIn = () => {

    const [signInData, setSignInData] = useState<LoginRequestDTO>({email: "", password: ""});
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();
    const token: string | null = localStorage.getItem(TOKEN);
    const state: AuthReducerState = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (token) {
            dispatch(currentUser(token));
        }
    }, [token, state.reqUser, dispatch]);

    useEffect(() => {
        if (state.reqUser) {
            navigate("/");
        }
    }, [state, navigate]);

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Sign in form submitted");
        dispatch(loginUser(signInData));
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSignInData({...signInData, email: e.target.value});
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSignInData({...signInData, password: e.target.value});
    };

    const onClickCreateNewAccount = (e: any) => {
        navigate("/signup");
    };

    return (
        <div>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <h2 style={{
                        color: '#00eaff',
                        fontWeight: 800,
                        fontSize: '2rem',
                        letterSpacing: '-1px',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        textShadow: '0 2px 12px #00eaff33'
                    }}>
                        PingpongChat
                    </h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <p className={styles.text}>Email</p>
                            <TextField
                                className={styles.textInput}
                                id="email"
                                type="email"
                                label="Enter your email"
                                variant="outlined"
                                onChange={onChangeEmail}
                                value={signInData.email}/>
                        </div>
                        <div>
                            <p className={styles.text}>Password</p>
                            <TextField
                                className={styles.textInput}
                                id="password"
                                type="password"
                                label="Enter your password"
                                variant="outlined"
                                onChange={onChangePassword}
                                value={signInData.password}/>
                        </div>
                        <div className={styles.button}>
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                type="submit">
                                Sign in
                            </Button>
                        </div>
                    </form>
                    <div className={styles.bottomContainer}>
                        <p style={{marginBottom: '2rem'}}>Create new account</p>
                        <Button variant='text' size='large' onClick={onClickCreateNewAccount} style={{marginTop: '0.8rem'}}>Signup</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
