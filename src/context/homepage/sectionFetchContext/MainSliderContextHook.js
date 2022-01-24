import React, {useEffect, useState} from 'react';
import ApiUrl from '../../../api/ApiUrl'

const useMainSliderContext = () => {
    const [bannerData, setBannerData]  = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(async ()=>{
        const api = new ApiUrl();

        try{
            setLoading(true);
            setErrors({})
            const {data} = await api.getSingleSlug('main-banner');

            const bData = data.data
            //console.log(dData)
            setBannerData({ bData})
            setLoading(false);
        }catch (e) {
            console.log(e)
            setErrors({e})
        }
    },[]);

    return {
        errors,
        loading,
        bannerData
    };
};

export default useMainSliderContext;
