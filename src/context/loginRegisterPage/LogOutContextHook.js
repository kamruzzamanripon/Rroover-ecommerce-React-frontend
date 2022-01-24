import React,{useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";
import {useNavigate} from 'react-router-dom';
import Cookie from 'js-cookie';

const useLogOutContextHook = (userdata) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [logOutData, setLogOutData] = useState();
    let navigate = useNavigate();

    const logOutEvent = async ()=>{
        const api = new ApiUrl();

        try{
            setLoading(true);
            setErrors()
            setLogOutData();

            const data = await api.authPostSlug('user-logout', userdata);
            //console.log("registerData Context", data);
            setLogOutData(data);
            setLoading(false);
            Cookie.remove('passport_frontend');
            Cookie.remove('user_auth');
            Cookie.remove('user_info');
            navigate('/', { replace: true })
        }catch (e) {
            setErrors(e.response && e.response.data.errors);
            //console.log("registerData Context errors data", e.response && e.response.data.errors)
        }
    }
    return {
        loading,
        errors,
        logOutData,
        logOutEvent
    };
};

export default useLogOutContextHook;
