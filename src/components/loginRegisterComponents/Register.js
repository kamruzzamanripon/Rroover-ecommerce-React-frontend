import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import useRegisterContextHook from '../../context/loginRegisterPage/RegisterContextHook';

function Register() {
    const [userdata, setUserdata] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');

    const {loading, errors, registerData} = useRegisterContextHook(userdata);
    const alert = useAlert()

    //console.log("register Page registerData", registerData);


    const registerUser = (e) => {
        e.preventDefault();
        setUserdata({
            name,
            email,
            password,
            password_confirmation
        });

        setName('');
        setEmail('');
        setPassword('');
        setpassword_confirmation('');

    };


    useEffect(()=>{
        if((registerData?.data?.message) === "registered succesfully"){
            alert.show(registerData?.data?.message)
        }
    },[registerData?.data?.message])

    return (

        <Fragment>

            <div className="col-lg-6">

                <div className="reg-wrapper">
                    <h2 className="account-h2 u-s-m-b-20">Register</h2>

                    {
                        (registerData?.data?.message) === "registered succesfully" && (
                            <h2 className="text-success"> Congratulation, your Registration is completed, Please
                                Log-in</h2>)
                    }

                    <h6 className="account-h6 u-s-m-b-30">Registering for this site allows you to access your order
                        status and history.</h6>
                    <form onSubmit={(e) => registerUser(e)}>

                        <div className="u-s-m-b-30">
                            <label htmlFor="user-name">Username
                                <span className="astk">*</span> {errors ? (
                                    <span className="text-danger"> {errors.name}</span>) : ""}
                            </label>

                            <input
                                type="text"
                                id="user-name"
                                className="text-field"
                                placeholder="Username"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="u-s-m-b-30">
                            <label htmlFor="email">Email
                                <span className="astk">*</span> {errors ? (
                                    <span className="text-danger"> {errors.email}</span>) : ""}
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="text-field"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="u-s-m-b-30">
                            <label htmlFor="password">Password
                                <span className="astk">*</span> {errors ? (
                                    <span className="text-danger"> {errors.password}</span>) : ""}
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="text-field"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)} value={password}
                            />
                        </div>
                        <div className="u-s-m-b-30">
                            <label htmlFor="password">Confirmation Password
                                <span className="astk">*</span> {errors ? (
                                    <span className="text-danger"> {errors.password}</span>) : ""}
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="text-field"
                                placeholder="Password"
                                onChange={e => setpassword_confirmation(e.target.value)}
                                value={password_confirmation}
                            />
                        </div>
                        <div className="u-s-m-b-30">
                            <input type="checkbox" className="check-box" id="accept"/>
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
