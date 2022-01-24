import React,{useEffect, useState} from 'react';
import ApiUrl from "../../api/ApiUrl";
import Cookie from 'js-cookie';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const useLoginContexHook = (userdata) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [loginData, setLoginData] = useState();
    let navigate = useNavigate();

    useEffect(async ()=>{

        const api = new ApiUrl();


        try{
            setLoading(true);
            setErrors()
            setLoginData();

             const data = userdata && await api.postSingleSlug('user-login', userdata);
             const token = data.data.token_info.token;
             const user_info = data.data.token_info;
             const user_auth = true;
            //console.log("Login Context", data);
            //console.log("Login Context distracture", token);
            if(token){
                Cookie.set("passport_frontend",  token)
                Cookie.set("user_auth",  user_auth)
                Cookie.set("user_info",  JSON.stringify(user_info))
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
            }
            setLoginData(data);
            setLoading(false);
            navigate('/', { replace: true })
        }catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("Login Context errors data", e.response && e.response.data.message)
        }

    },[userdata]);

    return {
        loading,
        errors,
        loginData

    };
};

export default useLoginContexHook;
