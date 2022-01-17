import React,{Fragment} from 'react'

function LostPassword() {
    return (
        <Fragment>
            <div className="page-lost-password u-s-p-t-80">
                <div className="container">
                <div className="page-lostpassword">
                    <h2 className="account-h2 u-s-m-b-20">Forgot Password ?</h2>
                    <h6 className="account-h6 u-s-m-b-30">Enter your email or username below and we will send you a link to reset your password.</h6>
                    <form>
                    <div className="w-50">
                        <div className="u-s-m-b-13">
                        <label htmlFor="user-name-email">Username or Email
                            <span className="astk">*</span>
                        </label>
                        <input type="text" id="user-name-email" className="text-field" placeholder="Username / Email" />
                        </div>
                        <div className="u-s-m-b-13">
                        <button className="button button-outline-secondary">Get Reset Link</button>
                        </div>
                    </div>
                    <div className="page-anchor">
                        <a href="account.html">
                        <i className="fas fa-long-arrow-alt-left u-s-m-r-9" />Back to Login</a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LostPassword
