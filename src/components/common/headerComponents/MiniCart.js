import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { cartTotal } from "../../../utilityHook/cartCountInfoHook";
import MiniCartAction from "./MidHeader/MiniCartAction";


function MiniCart({miniCartTiggerToggle, miniCartTigger, cartItemsData}) {

    const miniCartTiggerevent = () => {
        miniCartTiggerToggle()
    };


    return (
        <Fragment>

            <div className={miniCartTigger === true ? 'mini-cart-open mini-cart-wrapper' : 'mini-cart-wrapper'}>
                <div className="mini-cart">
                    <div className="mini-cart-header">
                        YOUR CART
                        <button type="button" className="button ion ion-md-close" id="mini-cart-close"
                                onClick={miniCartTiggerevent}/>
                    </div>
                    <ul className="mini-cart-list">

                        {cartItemsData ?
                            cartItemsData.length > 0 ? cartItemsData.map((cartItem, index) => {

                                const productImageArray = cartItem.product ? cartItem.product.image : [];
                                const productImageParse = productImageArray.length > 0 ? JSON.parse(productImageArray) : [];
                                const productImage = productImageParse ? productImageParse[0] : [];

                                return (
                                    <li className="clearfix" key={index}>
                                        <a>
                                            <img src={process.env.REACT_APP_ImagebaseUrl + productImage} alt="Product"/>

                                            <span className="mini-item-name">{cartItem?.product?.name}</span>
                                            <span className="mini-item-price">${cartItem.actual_price}</span>
                                            <span className="mini-item-quantity"> x {cartItem?.quantity} </span>

                                            <MiniCartAction ProductId={cartItem?.product?.id} cartItem={cartItem}/>

                                        </a>
                                    </li>
                                )
                            }) : "Your Cart is Empty"
                            : "Data Loading..."}


                    </ul>
                    <div className="mini-shop-total clearfix">
                        <span className="mini-total-heading float-left">Total:</span>

                        <span className="mini-total-price float-right">${cartTotal(cartItemsData)}</span>
                    </div>
                    <div className="mini-action-anchors">
                        <Link to="/authentication/cart" className="cart-anchor">View Cart</Link>
                        <Link to="/checkout" className="checkout-anchor">Checkout</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MiniCart
