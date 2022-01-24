import React,{useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import Cookie from 'js-cookie';

const PrivateOutlet = () => {
    const [auth, setAuth] = useState(true);
    const token = Cookie.get('passport_frontend');
    const userAuth = Cookie.get('user_auth');
    //console.log("provateOutlect", userAuth)
    return userAuth && token.length > 0 ? <Outlet/> : <Navigate to="/login" />
};

export default PrivateOutlet;
