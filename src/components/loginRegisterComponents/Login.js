import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <Fragment>
            <div className="col-lg-6">
                <div className="login-wrapper">
                    <h2 className="account-h2 u-s-m-b-20">Login</h2>
                    <h6 className="account-h6 u-s-m-b-30">Welcome back! Sign in to your account.</h6>
                    <form>
                    <div className="u-s-m-b-30">
                        <label htmlFor="user-name-email">Username or Email
                        <span className="astk">*</span>
                        </label>
                        <input type="text" id="user-name-email" className="text-field" placeholder="Username / Email" />
                    </div>
                    <div className="u-s-m-b-30">
                        <label htmlFor="login-password">Password
                        <span className="astk">*</span>
                        </label>
                        <input type="text" id="login-password" className="text-field" placeholder="Password" />
                    </div>
                    <div className="group-inline u-s-m-b-30">
                        <div className="group-1">
                        <input type="checkbox" className="check-box" id="remember-me-token" />
                        <label className="label-text" htmlFor="remember-me-token">Remember me</label>
                        </div>
                        <div className="group-2 text-right">
                        <div className="page-anchor">
                            <Link to="/lost-password">
                            <i className="fas fa-circle-o-notch u-s-m-r-9" />Lost your password?</Link>
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
