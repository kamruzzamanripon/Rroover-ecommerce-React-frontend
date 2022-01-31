import React, {useEffect, useState} from 'react';
import {userAuthId} from '../../utilityHook/userAuthHook'
import useWishProductDeleteHook from "../../context/wishListPage/WishProductDeleteHook";
import {CartState} from "../../context/cart/CartContext";


const AddToCartAction = ({productId, setDataFetch, price}) => {
    const [productInfo, setProductInfo] = useState({})

    const {addToCartSingleProduct} = CartState();

    useEffect(() => {
        setProductInfo({
            productId:productId,
            userAuthId:userAuthId,
            productPrice:price,
            productQuentity:1
        })
    }, [])

    const {wishProductDelete} = useWishProductDeleteHook()

    const addToCartEvent = () => {
        //addToCart(productId, userAuthId, price)
        addToCartSingleProduct(productInfo)
        wishProductDelete(productId);
        setDataFetch(true)


    }

    //console.log("wishList Add to Cart", userAuthId)

    return (
        <button className="button button-outline-secondary" onClick={addToCartEvent}>Add to Cart</button>
    );
};

export default AddToCartAction;
