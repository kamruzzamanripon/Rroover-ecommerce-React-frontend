import React,{Fragment} from 'react'

function Register() {
    return (
        <Fragment>
            <div className="col-lg-6">
                <div className="reg-wrapper">
                    <h2 className="account-h2 u-s-m-b-20">Register</h2>
                    <h6 className="account-h6 u-s-m-b-30">Registering for this site allows you to access your order status and history.</h6>
                    <form>
                    <div className="u-s-m-b-30">
                        <label htmlFor="user-name">Username
                        <span className="astk">*</span>
                        </label>
                        <input type="text" id="user-name" className="text-field" placeholder="Username" />
                    </div>
                    <div className="u-s-m-b-30">
                        <label htmlFor="email">Email
                        <span className="astk">*</span>
                        </label>
                        <input type="text" id="email" className="text-field" placeholder="Email" />
                    </div>
                    <div className="u-s-m-b-30">
                        <label htmlFor="password">Password
                        <span className="astk">*</span>
                        </label>
                        <input type="text" id="password" className="text-field" placeholder="Password" />
                    </div>
                    <div className="u-s-m-b-30">
                        <input type="checkbox" className="check-box" id="accept" />
                        <label className="label-text no-color" htmlFor="accept">I’ve read and accept the
                        <a href="terms-and-conditions.html" className="u-c-brand">terms &amp; conditions</a>
                        </label>
                    </div>
                    <div className="u-s-m-b-45">
                        <button className="button button-primary w-100">Register</button>
                    </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
