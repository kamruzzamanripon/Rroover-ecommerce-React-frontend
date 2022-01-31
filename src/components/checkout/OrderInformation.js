import React, {Fragment, useEffect, useState} from 'react';
import PaymentType from "./PaymentType";
import TermConditions from "./TermConditions";
import {CartState} from "../../context/cart/CartContext";
import {cartTotal} from "../../utilityHook/cartCountInfoHook"
import UserAuthHook from "../../utilityHook/userAuthHook";
import CheckOutContextHook from "../../context/checkout/CheckOutContextHook";

const OrderInformation = ({OrderPlaceForm, setOrderInfo}) => {

    const {state:{cart}} = CartState();
    const {authId} = UserAuthHook();
    const {userOrderPlace} = CheckOutContextHook()

    const [userId, setUserId] = useState(authId);
    const [totalPrice , setTotalPrice] = useState();
    const [paymentMethod, setPaymentMethod]  = useState();

    const orderInfo = {
        userId,
        totalPrice,
        paymentMethod
    }

    useEffect(()=>{
        setUserId(authId)
        setTotalPrice(cartTotal(cart))
    })

    useEffect(()=>{
        setOrderInfo(orderInfo)
    },[userId, totalPrice, paymentMethod])


    const orderPlace = (e)=>{
        e.preventDefault();
        //console.log("order submit now")
        setOrderInfo(orderInfo)
        OrderPlaceForm()
    }

    //console.log("Order Place", paymentMethod);
    return (
        <Fragment>
            <h4 className="section-h4">Your Order</h4>
            <div className="order-table">

                <table className="u-s-m-b-13">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>

                    {cart && cart.length > 0 ? (
                            cart.map((item, index)=>{
                                return(
                                <tr key={index}>
                                    <td>
                                        <h6 className="order-h6">{item.product.name}</h6>
                                        <span className="order-span-quantity"> x {item.quantity}</span>
                                    </td>
                                    <td>
                                        <h6 className="order-h6">$ {item.actual_price}</h6>
                                    </td>
                                </tr>
                            )
                            })

                    ) : "Please choose your Product"}



                    <tr>
                        <td>
                            <h3 className="order-h3">Subtotal</h3>
                        </td>
                        <td>
                            <h3 className="order-h3">$ {totalPrice}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="order-h3">Shipping</h3>
                        </td>
                        <td>
                            <h3 className="order-h3">$ 0.00</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="order-h3">Tax</h3>
                        </td>
                        <td>
                            <h3 className="order-h3">$ 0.00</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="order-h3">Total</h3>
                        </td>
                        <td>
                            <h3 className="order-h3">$ {totalPrice}</h3>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <PaymentType setPaymentMethod={setPaymentMethod}/>
                <TermConditions />

                <button type="submit" className="button button-outline-secondary" onClick={(e)=>orderPlace(e)}>Place
                    Order
                </button>
            </div>
        </Fragment>
    );
};

export default OrderInformation;
