import React,{useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";
import {useNavigate} from 'react-router-dom'

const useRegisterContextHook = (userdata) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [registerData, setRegisterData] = useState();
    let navigate = useNavigate();

      useEffect(async ()=>{

        const api = new ApiUrl();

        try{
            setLoading(true);
            setErrors()
            setRegisterData();

            const data = userdata && await api.postSingleSlug('user-register', userdata);
            //console.log("registerData Context", data);
            setRegisterData(data);
            setLoading(false);
            navigate('/login', { replace: true })
        }catch (e) {
            setErrors(e.response && e.response.data.errors);
            //console.log("registerData Context errors data", e.response && e.response.data.errors)
        }

    },[userdata]);

    return {
        loading,
        errors,
        registerData

    };
};

export default useRegisterContextHook;
