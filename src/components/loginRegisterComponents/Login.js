import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import useLoginContexHook from '../../context/loginRegisterPage/LoginContexHook'

function Login() {
    const [userdata, setUserdata] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const {loading, errors, loginData} = useLoginContexHook(userdata);
    //console.log("Login Page", userdata)
    const submitForm = (e) => {
        e.preventDefault();

        if (email === '' && password === "") {
            setMessage('Please full up Mail Or Password')
        }

        setUserdata({
            email,
            password
        });

        setEmail('');
        setPassword('');
    }

    return (
        <Fragment>
            <div className="col-lg-6">
                <div className="login-wrapper">
                    <h2 className="account-h2 u-s-m-b-20">Login</h2>

                    {message && <span className="text-danger">{message}</span>} <br/>
                    {errors && <span className="text-danger">{errors}</span>}
                    <h6 className="account-h6 u-s-m-b-30">Welcome back! Sign in to your account.</h6>
                    <form onSubmit={submitForm}>
                        <div className="u-s-m-b-30">
                            <label htmlFor="user-name-email">Username or Email
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
                        <div className="group-inline u-s-m-b-30">
                            <div className="group-1">
                                <input type="checkbox" className="check-box" id="remember-me-token"/>
                                <label className="label-text" htmlFor="remember-me-token">Remember me</label>
                            </div>
                            <div className="group-2 text-right">
                                <div className="page-anchor">

                                    <Link to="/lost-password">
                                        <i className="fas fa-circle-o-notch u-s-m-r-9"/>Lost your password?
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="m-b-45">
                            <button className="button button-outline-secondary w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
