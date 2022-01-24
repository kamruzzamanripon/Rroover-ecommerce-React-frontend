import React, {useEffect, useState} from 'react';
import ApiUrl from '../../../api/ApiUrl'

const useBannerImageViewMoreContext = () => {
    const api = new ApiUrl();
    const [singleBanner, setSingleBanner] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(async () => {
        try {
            setLoading(true);
            setErrors({})
            const {data: {data}} = await api.getSingleSlug('single-banner');
            const bannerData = data[0];
            //console.log(data[0].sub_title)
            setSingleBanner(bannerData);
            setLoading(false);
        } catch (e) {
            console.log(e)
            setErrors({e})
        }
    }, []);

    return {
        singleBanner,
        loading,
        errors
    };
};

export default useBannerImageViewMoreContext;
