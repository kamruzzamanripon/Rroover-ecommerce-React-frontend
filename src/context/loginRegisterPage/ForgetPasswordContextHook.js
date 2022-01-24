import React,{useState} from 'react';
import ApiUrl from "../../api/ApiUrl";
import {useNavigate} from 'react-router-dom';
import Cookie from "js-cookie";

const useForgetPasswordContextHook = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [forgetpasswordData, setForgetpasswordData] = useState();


    const forgetPasswordEvent = async (email)=>{
        const api = new ApiUrl();

        try{
            setLoading(true);
            setErrors()
            setForgetpasswordData();
            console.log("forgetPasswordEvent email Context", email);
            const formData = new FormData();
            formData.append('email', email)

            const data = await api.postSingleSlug('password/forgot-password', formData);
            console.log("forgetPasswordEvent Context", data);
            setForgetpasswordData(data);
            setLoading(false);

            //navigate('/', { replace: true })
        }catch (e) {
            setErrors(e.response && e.response.data.errors);
            //console.log("registerData Context errors data", e.response && e.response.data.errors)
        }

    };
    return {
        loading,
        errors,
        forgetpasswordData,
        forgetPasswordEvent
    };
};

export default useForgetPasswordContextHook;
