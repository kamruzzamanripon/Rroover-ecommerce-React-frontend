import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import useForgetPasswordSetPasswordContextHook from '../context/loginRegisterPage/ForgetPasswordSetPasswordContextHook'


function ForgetPassword() {
    const [userdata, setUserdata] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [password_confirmation, setpassword_confirmation] = useState('');
    const token = searchParams.get("token");

    const {loading, errors, passwordResetData} = useForgetPasswordSetPasswordContextHook(userdata);


    //console.log("params Login Page", userdata)
    const submitForm = (e)=>{
        e.preventDefault();
        setUserdata({
            email,
            password,
            password_confirmation,
            token
        });

        //forgetPasswordSetPassword(userdata)
        setEmail('');
        setPassword('');
        setpassword_confirmation('');
    }

    console.log("ForgetPassword Page", errors)
    return (
        <Fragment>
            <br/> <br/>
            <div className="col-lg-12">
                <div className="login-wrapper">
                    <h2 className="account-h2 u-s-m-b-20">Login</h2>
                    <h6 className="account-h6 u-s-m-b-30">Welcome back! Sign in to your account.</h6>
                    {errors && errors.map((error)=>{
                       return <span>{error}</span>
                    })}
                    <form onSubmit={(e)=>submitForm(e)}>
                        <div className="u-s-m-b-30">
                            <label htmlFor="user-name-email">Email
                                <span className="astk">*</span>
                            </label>
                            <input
                                type="text"
                                id="user-name-email"
                                className="text-field"
                                placeholder="Username / Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="u-s-m-b-30">
                            <label htmlFor="login-password">Password
                                <span className="astk">*</span>
                            </label>
                            <input
                                type="text"
                                id="login-password"
                                className="text-field"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <div className="u-s-m-b-30">
                            <label htmlFor="password">Confirmation Password
                                <span className="astk">*</span>
                            </label>
                            <input
                                type="text"
                                id="password"
                                className="text-field"
                                placeholder="Password"
                                onChange={e => setpassword_confirmation(e.target.value)}
                                value={password_confirmation}
                            />
                        </div>

                        <div className="m-b-45">
                            <button className="button button-outline-secondary w-100">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default ForgetPassword
