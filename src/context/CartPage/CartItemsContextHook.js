import React, {useState} from 'react';
import ApiUrl from "../../api/ApiUrl";

const useCartItemsContextHook = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [cartItemsData, setCartItemsData] = useState('');
    const [cartItemDeleteData, setCartItemDeleteData] = useState('');
    const [cartQuantityUpdateInfo, setCartQuantityUpdateInfo] = useState('');
    const [addCartInfo, setAddCartInfo] = useState('');
    const api = new ApiUrl();

    const cartItemsDataFetch = async () => {
        try {
            setLoading(true);
            setErrors();
            setCartItemsData('');

            const {data: {data}} = await api.authGetSlug("cart-list");
            setCartItemsData(data)
            setLoading(false);
            //console.log("cartItemsDataFetch Context", cartItemsData);
            //console.log("cartItemsData Context", cartItemsData);

        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    const cartItemDeleteFetch = async (productId) => {
        try {
            setLoading(true);
            setErrors();
            setCartItemDeleteData('');

            const {data: {data}} = await api.authDeleteSlug("delete-cart", productId);
            setCartItemDeleteData(data)
            setLoading(false);

            //console.log("setCartItemDeleteData Context", cartItemsData);
            //console.log("cartItemsData Context", cartItemsData);

        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    const cartItemQuentiyUpdate = async (productId, numberCount)=>{
        try {
            setLoading(true);
            setErrors();
            setCartQuantityUpdateInfo('');

            const formData = new FormData();
            formData.append('quantity', numberCount ? numberCount : "");
            formData.append('product_id', productId ? productId : "");

            const {data: {data}} = await api.authPostSlug("update-cart", formData);
            // setCartQuantityUpdateInfo(data)
            setLoading(false);
            //console.log("cartItemsDataFetch Context", cartItemsData);
            //console.log("cartItemQuentiyUpdate Context", productId, numberCount);

        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    }

    const addToCart = async (productId, userId, price)=>{
        try {
            setLoading(true);
            setErrors();
            setAddCartInfo('');

            const formData = new FormData();
            formData.append('user_id', userId ? userId : "");
            formData.append('product_id', productId ? productId : "");
            formData.append('actual_price', price ? price : "");

            const {data: {data}} = await api.authPostSlug("add-cart", formData);
            setAddCartInfo(data)
            setLoading(false);
            //console.log("cartItemsDataFetch Context", cartItemsData);


        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    }



    return {
        cartItemsDataFetch,
        cartItemDeleteFetch,
        cartItemQuentiyUpdate,
        addToCart,
        cartItemsData,
        loading,
        errors
    };
};

export default useCartItemsContextHook;
