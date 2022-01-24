import React,{Fragment, useState,useEffect} from 'react'
import useForgetPasswordContextHook from '../context/loginRegisterPage/ForgetPasswordContextHook.js'

function LostPassword() {
    const[email, setEmail] = useState('');
    const[loader, setLoader] = useState(false);
    const [message, setMessage] = useState('')
    const {loading, errors, forgetpasswordData, forgetPasswordEvent} = useForgetPasswordContextHook();

    const getRestLink = ()=>{

        if(email === ''){
            setMessage("Please type your email")
        }

        if( email ){
            forgetPasswordEvent(email);
            setEmail('');
        }

    }

    useEffect(()=>{
        if(!loading){
            setEmail();
        }
    },[loader])

    console.log("email", email)
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
                        <input
                            type="text"
                            id="user-name-email"
                            className="text-field"
                            placeholder="Username / Email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />
                            {message && message}
                        </div>
                        <div className="u-s-m-b-13">
                        <button className="button button-outline-secondary" onClick={getRestLink}>Get Reset Link</button>
                            <br/>

                            {loading && "Mail Sending..." }

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
