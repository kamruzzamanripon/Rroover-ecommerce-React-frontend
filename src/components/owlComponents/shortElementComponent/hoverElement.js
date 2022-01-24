import React from 'react';
import {Link} from "react-router-dom";
import useAddWishListEventHook from "../../../utilityHook/addWishListEventHook";

const HoverElement = ({productId}) => {
   const {addWishListEvent} = useAddWishListEventHook(productId)

    const addWishList = (e)=>{
        e.preventDefault()
        addWishListEvent()
    }

    //console.log("WishList Product userInfo", productInfo)


    return (
        <div className="item-action-behaviors">

            {/*<a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look*/}
            {/*</a>*/}
            <a className="item-addwishlist" onClick={(e) => addWishList(e)}>Add to Wishlist</a>
            <Link className="item-addCart" to={`/singleProduct/${productId}`}> Add to Cart</Link>
        </div>
    );
};

export default HoverElement;
