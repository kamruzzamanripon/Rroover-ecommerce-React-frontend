import React, {useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const useCartItemsContextHook = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [cartItemsData, setCartItemsData] = useState('');
    const [cartItemDeleteData, setCartItemDeleteData] = useState('');
    const [cartQuantityUpdateInfo, setCartQuantityUpdateInfo] = useState('');
    const [addCartInfo, setAddCartInfo] = useState('');
    const api = new ApiUrl();

    //Call function without Param
    const cartItemsDataFetch = async () => {
        try {
            setLoading(true);
            setErrors();
            setCartItemsData('');

            //localStorage.clear();
            const {data: {data}} = await api.authGetSlug("cart-list");
            setCartItemsData(data)
            setLoading(false);
            // const myCart = localStorage.getItem("myCart")
            // if(myCart !== data){
            //     localStorage.setItem("myCart", JSON.stringify(data));
            // }
            localStorage.setItem("myCart", JSON.stringify(data));


            //console.log("cartItemsDataFetch Context", cartItemsData);
            //console.log("cartItemsData Context", cartItemsData);

        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    //call function with param is- Product Id
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

    //call Function with param is- Product Id and Product quantity
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

    //call function with param is product Id, user Id and product Price
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

    //call Fucntion without Param
    const LocalStoreCart = ()=>{
         const LocalStoreCartDAta  = JSON.parse(localStorage.getItem("myCart"));
        return LocalStoreCartDAta
    }

    useEffect(()=>{
        LocalStoreCart();
        //setLoading(true)
    },[])

    return {
        cartItemsDataFetch,
        cartItemDeleteFetch,
        cartItemQuentiyUpdate,
        addToCart,
        LocalStoreCart,
        cartItemsData,
        loading,
        errors
    };
};

export default useCartItemsContextHook;
