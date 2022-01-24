import React from 'react';
import Cookie from 'js-cookie';
import {userAuthId} from '../../utilityHook/userAuthHook'
import useCartItemsContextHook from "../../context/CartPage/CartItemsContextHook";
import useWishProductDeleteHook from "../../context/wishListPage/WishProductDeleteHook";

const AddToCartAction = ({productId, setDataFetch, price}) => {

    const {addToCart} = useCartItemsContextHook();
    const {wishProductDelete} = useWishProductDeleteHook()

    const addToCartEvent =()=>{
        addToCart(productId, userAuthId, price);
        wishProductDelete(productId);
        setDataFetch(true)
    }

    //console.log("wishList Add to Cart", userAuthId)

    return (
        <button className="button button-outline-secondary" onClick={addToCartEvent}>Add to Cart</button>
    );
};

export default AddToCartAction;
