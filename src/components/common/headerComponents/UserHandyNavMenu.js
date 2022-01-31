import React,{Fragment, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Cookie from 'js-cookie';
import useLogOutContextHook from '../../../context/loginRegisterPage/LogOutContextHook'
import useWishListUrlHook from "../../../utilityHook/wishListUrlEventHook";
import useMyCartUrlEventHook from "../../../utilityHook/myCartUrlEventHook";
import {CartState} from "../../../context/cart/CartContext";
import userAuthInfo from '../../../utilityHook/userAuthHook'

const UserHandyNavMenu = () => {

    const [userAuth, setUserAuth] = useState();
    const [userId, setUserId] = useState();

    const {wishlistUrlCall} = useWishListUrlHook();
    const {logOutEvent} = useLogOutContextHook();
    const {myCartUrlCall} = useMyCartUrlEventHook()

    const {cartItemsDataFetch} = CartState()
    const {authId} = userAuthInfo() ;
    const {authExits} = userAuthInfo() ;

    useEffect(()=>{
        setUserId(authId)
        setUserAuth(authExits)
    })

    useEffect(()=>{
        cartItemsDataFetch(userId)
    },[userId])

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


                {userAuth ? (
                    <Fragment>
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
                            <Link to="/authentication/checkout">
                                <i className="far fa-check-circle u-s-m-r-9" />
                                Checkout</Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                <i className="fas fa-sign-in-alt u-s-m-r-9" />
                                <span onClick={(e)=>logOut(e)}>Logout</span></Link>
                        </li>
                    </Fragment>
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
