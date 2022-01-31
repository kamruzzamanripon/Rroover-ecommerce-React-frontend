import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {cartReducer} from "./CartReducer";
import ApiUrl from "../../api/ApiUrl";
import {useAlert} from 'react-alert';
import Cookie from "js-cookie";



const Cart = createContext();

const CartContext = ({children}) => {

    const [errors, setErrors] = useState('');
    const api = new ApiUrl();
    const alert = useAlert();




    const [state, dispatch] = useReducer(cartReducer, {cart: [], loading: true});


    //All Cart Product Fatch-
    const cartItemsDataFetch = async () => {
        try {
            const {data: {data}} = await api.authGetSlug("cart-list");
            dispatch({type: "ALL_CART", payload: data})
            // console.log("fetch Dataasd Context", data)
        } catch (e) {
            //setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    //Cart Item Delete- need param : product Id and product item info
    const cartItemDeleteFetch = async (productId, cartItem) => {
        try {
            setErrors('');
            const {data: {data}} = await api.authDeleteSlug("delete-cart", productId);
            dispatch({type: "REMOVE_FROM_CART", payload: cartItem})

        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    };

    //update Quantity- param used: product Id, product quentity
    const cartItemQuentiyUpdate = async (productId, numberCount) => {
        try {

            setErrors();
            const formData = new FormData();
            formData.append('quantity', numberCount ? numberCount : "");
            formData.append('product_id', productId ? productId : "");
            const {data: {data}} = await api.authPostSlug("update-cart", formData);
            dispatch({type: "CHANGE_CART_QTY", payload: data})
            cartItemsDataFetch()
        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    }


    const addToCartSingleProduct = async (productInfo='') => {
        const userAuth = Cookie.get('user_auth');
        if (userAuth) {
            try {
                setErrors();
                const formData = new FormData();
                //console.log("cart Context", productInfo)
                formData.append('user_id', productInfo ? productInfo.userAuthId : "");
                formData.append('product_id', productInfo ? productInfo.productId : "");
                formData.append('actual_price', productInfo ? productInfo.productPrice : '');
                formData.append('color', productInfo ? productInfo.productColor : "");
                formData.append('quantity', productInfo ? productInfo.productQuentity : 1);
                formData.append('size', productInfo ? productInfo.productSize : "");


                const {data} = await api.authPostSlug("add-cart", formData);
                dispatch({type: "ADD_TO_CART", payload: data.data})
                cartItemsDataFetch()
                alert.show(data.data ? data.data.message : data.message);

                //console.log("cartItemsDataFetch Context", cartItemsData);

            } catch (e) {
                setErrors(e.response && e.response.data.message);
                //console.log("WishList Context errors data", e.response.data.message )
            }
        } else {

            alert.show("Please Login Your Account");

        }

    }



    useEffect(() => {
        cartItemsDataFetch()
    }, [])



    //console.log("cart zz Context ", userId)

    return (
        <Cart.Provider value={
            {
                state,
                dispatch,
                cartItemsDataFetch,
                cartItemDeleteFetch,
                cartItemQuentiyUpdate,
                addToCartSingleProduct
            }
        }>
            {children}
        </Cart.Provider>
    );
};


export const CartState = () => {
    return useContext(Cart);
};

export default CartContext;
