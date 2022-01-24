import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Cookie from 'js-cookie';
import { useAlert } from 'react-alert'

const useWishListUrlHook = () => {
    const navigate = useNavigate();
    const userAuth = Cookie.get('user_auth');
    const alert = useAlert();

    const wishlistUrlCall = ()=>{
        if(userAuth){
            navigate('/authentication/wishlist/', { replace: true })
        }else{
            alert.show("Please Login Your Account");
            navigate('/login', { replace: true })
        }
    }
    return {
        wishlistUrlCall
    };
};

export default useWishListUrlHook;
