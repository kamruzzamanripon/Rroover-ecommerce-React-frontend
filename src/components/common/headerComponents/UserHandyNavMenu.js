import React from 'react';
import {Link} from "react-router-dom";
import Cookie from 'js-cookie';
import useLogOutContextHook from '../../../context/loginRegisterPage/LogOutContextHook'
import useWishListUrlHook from "../../../utilityHook/wishListUrlEventHook";
import useMyCartUrlEventHook from "../../../utilityHook/myCartUrlEventHook";

const UserHandyNavMenu = () => {
    const userAuth = Cookie.get('user_auth') ? Cookie.get('user_auth') : "";
    const userInfo = Cookie.get('user_info') ? JSON.parse(Cookie.get('user_info')) : "";
    const userId = userInfo?.id;

    const {wishlistUrlCall} = useWishListUrlHook();
    const {logOutEvent} = useLogOutContextHook();
    const {myCartUrlCall} = useMyCartUrlEventHook()

    const wishListUrl = (e)=>{
        wishlistUrlCall()
    };

    const myCartEvent = (e)=>{
        myCartUrlCall();
    }

    const logOut = (e)=>{
        e.preventDefault();
        logOutEvent(userId);
    };

    return (
        <li>
            <a>My Account
                <i className="fas fa-chevron-down u-s-m-l-9" />
            </a>
            <ul className="g-dropdown" style={{width: '200px'}}>
                <li onClick={(e)=>myCartEvent(e)}>
                    <Link to="/cart">
                        <i className="fas fa-cog u-s-m-r-9" />
                        My Cart</Link>
                </li>
                <li onClick={(e) => wishListUrl(e)}>
                    <Link to="/wishlist">
                        <i className="far fa-heart u-s-m-r-9" />
                        My Wishlist</Link>
                </li>
                <li>
                    <Link to="/checkout">
                        <i className="far fa-check-circle u-s-m-r-9" />
                        Checkout</Link>
                </li>
                {userAuth ? (
                    <li>
                        <Link to="/logout">
                            <i className="fas fa-sign-in-alt u-s-m-r-9" />
                            <span onClick={(e)=>logOut(e)}>Logout</span></Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">
                            <i className="fas fa-sign-in-alt u-s-m-r-9" />
                            Login / Signup</Link>
                    </li>
                )}

            </ul>
        </li>
    );
};

export default UserHandyNavMenu;
