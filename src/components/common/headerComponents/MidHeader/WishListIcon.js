import React from 'react';
import useWishListUrlHook from "../../../../utilityHook/wishListUrlEventHook";

const WishListIcon = () => {

    const {wishlistUrlCall} = useWishListUrlHook()
    const wishListUrl = (e)=>{
        wishlistUrlCall()
    }
    return (
        <li className="u-d-none-lg">
            {/*<Link to="authentication/wishlist">*/}
            <a onClick={(e) => wishListUrl(e)}>
                <i className="far fa-heart" />
            </a>
        </li>
    );
};

export default WishListIcon;
