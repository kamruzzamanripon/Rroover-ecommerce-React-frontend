import React, {useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const useWishProductDeleteHook = () => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [wishProductsData, setWishProductsData] = useState('');

    const wishProductDelete = async (productid) => {
        try {
            setLoading(true);
            setErrors();
            setWishProductsData('');

            const {data: {data}} = await api.authDeleteSlug('delete-wishproduct', productid);

            //console.log("wishProductDelete  Context", data);
            setWishProductsData(data.message);
            setLoading(false);


        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    return {
        wishProductDelete,
        wishProductsData,
        loading,
        errors
    };
};

export default useWishProductDeleteHook;
