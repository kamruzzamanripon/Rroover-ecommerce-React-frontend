import React, {useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const useAddWishProductsContextHook = (productInfo) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [wishProductsData, setWishProductsData] = useState('');


    const wishProducts = async () => {
        try {
            setLoading(true);
            setErrors();
            setWishProductsData('');

            const formData = new FormData();
            formData.append('user_id', productInfo ? productInfo?.user_id : "");
            formData.append('product_id', productInfo ? productInfo?.product_id : "");

            const {data: {data}} = formData && await api.authPostSlug('add-wishlist', formData);

            //console.log("WishList add Context", data.message);
            setWishProductsData(data.message);
            setLoading(false);


        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    return {
        wishProducts,
        wishProductsData,
        loading,
        errors
    };
};

export default useAddWishProductsContextHook;
