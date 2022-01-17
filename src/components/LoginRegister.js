import React,{Fragment} from 'react'
import Login from './loginRegisterComponents/Login'
import Register from './loginRegisterComponents/Register'

function LoginRegister() {
    return (
        <Fragment>
            <div className="page-account u-s-p-t-80">
                <div className="container">
                <div className="row">

                    {/* Login */}
                    <Login/>
                    {/* Login /- */}

                    {/* Register */}
                    <Register/>
                    {/* Register /- */}

                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginRegister
