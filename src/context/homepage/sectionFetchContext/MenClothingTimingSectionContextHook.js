import React, {useEffect, useState} from 'react';
import ApiUrl from '../../../api/ApiUrl'

const useMenClothingTimingSectionContext = () => {
    const api = new ApiUrl();
    const [menHotDealProduts, setMenHotDealProduts] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    useEffect(async ()=>{
        try {
            setMenHotDealProduts();
            setLoading(true);
            setErrors();
            const {data} = await api.getSingleSlug('mens-hotdeals');

            const bData = data.data;
            //console.log(bData)
            setMenHotDealProduts(bData);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrors(e)
        }
    },[]);

    return {
        menHotDealProduts,
        loading,
        errors
    };
};

export default useMenClothingTimingSectionContext;
