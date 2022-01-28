import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import TrComponent from "./TrComponent";
import {CartState} from "../../context/cart/CartContext";


const CartItems = () => {

    const {state: { cart }} = CartState();
    const {state: { loading }} = CartState() ? CartState() : "";

    //console.log("cart x Page", );

    return (
        <form>
            {/* Products-List-Wrapper */}
            <div className="table-wrapper u-s-m-b-60">
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>

                    {!loading && cart ?
                        cart.length > 0 ? cart.map((cartItem, index)=>{
                                return <TrComponent cartItem={cartItem} key={index} />
                            }) : "Your Cart is Empty"
                        : "Data Loading..."}

                    </tbody>
                </table>
            </div>
            {/* Products-List-Wrapper /- */}
            {/* Coupon */}
            <div className="coupon-continue-checkout u-s-m-b-60">
                <div className="coupon-area">
                    <h6>Enter your coupon code if you have one.</h6>
                    <div className="coupon-field">
                        <label className="sr-only" htmlFor="coupon-code">Apply Coupon</label>
                        <input id="coupon-code" type="text" className="text-field" placeholder="Coupon Code" />
                        <button type="submit" className="button">Apply Coupon</button>
                    </div>
                </div>
                <div className="button-area">
                    <Link to="/" className="continue">Continue Shopping</Link>
                    <Link to="/checkout" className="checkout">Proceed to Checkout</Link>
                </div>
            </div>
            {/* Coupon /- */}
        </form>
    );
};

export default CartItems;
