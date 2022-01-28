import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {cartReducer} from "./CartReducer";
import ApiUrl from "../../api/ApiUrl";

const Cart = createContext();

const CartContext = ({children}) => {
    const [errors, setErrors] = useState('');
    const api = new ApiUrl();

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

    //call function with param is product Id, user Id and product Price
    const addToCart = async (productId, userId, price) => {
        try {
            setErrors();
            const formData = new FormData();
            formData.append('user_id', userId ? userId : "");
            formData.append('product_id', productId ? productId : "");
            formData.append('actual_price', price ? price : "");

            const {data: {data}} = await api.authPostSlug("add-cart", formData);
            dispatch({type: "ADD_TO_CART", payload: data})
            cartItemsDataFetch()

            //console.log("cartItemsDataFetch Context", cartItemsData);

        } catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    }


    useEffect(() => {
        cartItemsDataFetch()
    }, [])

    //console.log("cart Context ", state)

    return (
        <Cart.Provider value={
            {
                state,
                dispatch,
                cartItemsDataFetch,
                cartItemDeleteFetch,
                cartItemQuentiyUpdate,
                addToCart
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
