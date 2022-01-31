import React, {useState, useEffect} from 'react';
import SocialShareInformation from "./SocialShareInformation";
import useAddWishListEventHook from "../../../../utilityHook/addWishListEventHook";
import {CartState} from "../../../../context/cart/CartContext";
import {userAuthId} from "../../../../utilityHook/userAuthHook";

const AddToCartForm = ({productId, setProductQuentity, productInfo}) => {
    const [numberCount, setNumberCount] = useState(1);
    const {addWishListEvent} = useAddWishListEventHook(productId)
    const {addToCartSingleProduct} = CartState();

    const addToCartEvent = (e)=>{
        e.preventDefault();
        addToCartSingleProduct(productInfo)
    }
    const addWishList = (e)=>{
        e.preventDefault()
        addWishListEvent()
    }

   const increaseHandle = (e)=>{
        e.preventDefault();
       setNumberCount(numberCount <= 100 ? numberCount + 1 : 1);
       //setProductQuentity(numberCount)
   }

    const discreaseHandle = (e)=>{
        e.preventDefault();
        setNumberCount(numberCount > 1 ? numberCount - 1 : 1)
    }

    useEffect(()=>{
        setProductQuentity(numberCount)
    },[numberCount])
    //console.log(productId)
    return (
        <div className="section-6-social-media-quantity-actions u-s-p-y-14">
            <form action="#" className="post-form">

                <SocialShareInformation/>

                <div className="quantity-wrapper u-s-m-b-22">
                    <span>Quantity:</span>
                    <div className="quantity">
                        <input type="text" className="quantity-text-field" value={numberCount}/>
                        <a className="plus-a"
                           onClick={(e) => increaseHandle(e)}>+</a>
                        <a className="minus-a"
                           onClick={(e) => discreaseHandle(e)}>-</a>
                    </div>
                </div>

                <div>
                    <button className="button button-outline-secondary" type="submit" onClick={(e) => addToCartEvent(e)}>Add to cart</button>
                    <button className="button button-outline-secondary far fa-heart u-s-m-l-6" onClick={(e) => addWishList(e)} />
                    <button className="button button-outline-secondary far fa-envelope u-s-m-l-6"/>
                </div>
            </form>
        </div>
    );
};

export default AddToCartForm;
