import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import useCartItemsContextHook from "../../context/CartPage/CartItemsContextHook";
import TrComponent from "./TrComponent";

const CartItems = () => {
    const [dataFetch, setDataFetch] = useState(false)
    const {cartItemsDataFetch, cartItemsData, loading, errors, cartItemDeleteFetch} = useCartItemsContextHook();

    useEffect(()=>{
        cartItemsDataFetch()
        setDataFetch(false)
    },[dataFetch]);


    console.log("cart x Page", dataFetch);
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

                    {!loading && cartItemsData ?
                        cartItemsData.length > 0 ? cartItemsData.map((cartItem, index)=>{
                                return <TrComponent cartItem={cartItem} key={index} setDataFetch={setDataFetch}/>
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
