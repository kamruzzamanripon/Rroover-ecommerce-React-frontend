import React, {useEffect, useState} from 'react';
import ApiUrl from '../../../api/ApiUrl'

const useBrandSliderContextHook = () => {
    const api = new ApiUrl();
    const [brandList, setBrandList] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    useEffect(async ()=>{
        try{
            setLoading(true);
            setErrors();
            const {data:{data}} = await api.getSingleSlug("brand-list");
            //console.log(data)
            setBrandList(data);
            setLoading(false);
        }catch (e) {
            console.log(e);
            setErrors(e);
        }
    },[])

    return {
        brandList,
        loading,
        errors
    };
};

export default useBrandSliderContextHook;
