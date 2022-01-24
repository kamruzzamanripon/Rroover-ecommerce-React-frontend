import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Cookie from 'js-cookie';
import { useAlert } from 'react-alert'

const useMyCartUrlEventHook = () => {
    const navigate = useNavigate();
    const userAuth = Cookie.get('user_auth');
    const alert = useAlert();

    const myCartUrlCall = ()=>{
        if(userAuth){
            navigate('/authentication/cart', { replace: true })
        }else{
            alert.show("Please Login Your Account");
            navigate('/login', { replace: true })
        }
    }
    return {
        myCartUrlCall
    };
};

export default useMyCartUrlEventHook;
