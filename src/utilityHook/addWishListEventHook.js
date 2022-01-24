import React, {useState, useEffect} from 'react';
import Cookie from 'js-cookie';
import {useAlert} from 'react-alert'
import useAddWishProductsContextHook from "../context/wishListPage/AddWishProductsContextHook";


const useAddWishListEventHook = (productId) => {
    const userAuth = Cookie.get('user_auth');
    const userInfo = Cookie.get('user_info');
    const [productInfo, setProductInfo] = useState('')
    const {id} = userInfo ? JSON.parse(userInfo) : "";
    const user_id = id ? id : "";
    const product_id = productId;
    const alert = useAlert();

    const {wishProducts, wishProductsData, loading, errors} = useAddWishProductsContextHook(productInfo)

    const addWishListEvent = async (e) => {

        if (userAuth) {
            wishProducts(productInfo);
        } else {
            alert.show("Please Login Your Account");
        }

    };

    useEffect(()=>{
        setProductInfo({
            user_id,
            product_id
        });
    },[])

    useEffect(()=>{
        if(wishProductsData && typeof wishProductsData === 'string' ){
            alert.show(wishProductsData);
        }

    },[wishProductsData])

    return {
        addWishListEvent
    };
};

export default useAddWishListEventHook;
