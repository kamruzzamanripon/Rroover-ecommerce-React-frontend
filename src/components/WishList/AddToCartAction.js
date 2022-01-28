import React from 'react';
import {userAuthId} from '../../utilityHook/userAuthHook'
import useWishProductDeleteHook from "../../context/wishListPage/WishProductDeleteHook";
import {CartState} from "../../context/cart/CartContext";



const AddToCartAction = ({productId, setDataFetch, price}) => {
    const {addToCart} = CartState();


    const {wishProductDelete} = useWishProductDeleteHook()

    const addToCartEvent =()=>{
        addToCart(productId, userAuthId, price)
        wishProductDelete(productId);
        setDataFetch(true)


    }

    //console.log("wishList Add to Cart", userAuthId)

    return (
        <button className="button button-outline-secondary" onClick={addToCartEvent}>Add to Cart</button>
    );
};

export default AddToCartAction;
