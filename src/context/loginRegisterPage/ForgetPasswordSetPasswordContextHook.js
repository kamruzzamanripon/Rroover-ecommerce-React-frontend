import React,{useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";
import {useNavigate} from 'react-router-dom'

const useForgetPasswordSetPasswordContextHook = (userdata) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [passwordResetData, setPasswordResetData] = useState();
    let navigate = useNavigate();

    useEffect(async ()=>{
        const api = new ApiUrl();

        try{
            setLoading(true);
            setErrors()
            setPasswordResetData();

            const {data} = userdata && await api.postSingleSlug('password/reset', userdata);
            console.log("ForgetPasswordSetPassword Context", data);
            setPasswordResetData(data);
            setLoading(false);
            if(data && data.message){
                navigate('/login', { replace: true })
            }
        }catch (e) {
            setErrors(e.response && e.response.data.errors);
            console.log("ForgetPasswordSetPassword Context errors data", e.response && e.response.data.errors)
        }
    },[userdata])

    return {
        loading,
        errors,
        passwordResetData,


    };
};

export default useForgetPasswordSetPasswordContextHook;
