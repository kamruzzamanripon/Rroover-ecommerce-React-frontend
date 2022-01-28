import React from 'react';
import {CartState} from "../../context/cart/CartContext";
import {cartTotal} from "../../utilityHook/cartCountInfoHook";

const BillingInfo = () => {

    const {state: { cart }} = CartState();

    return (
        <div className="calculation u-s-m-b-60">
            <div className="table-wrapper-2">
                <table>
                    <thead>
                    <tr>
                        <th colSpan={2}>Cart Totals</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <h3 className="calc-h3 u-s-m-b-0">Subtotal</h3>
                        </td>
                        <td>
                            <span className="calc-text">${cartTotal(cart)}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="calc-h3 u-s-m-b-8">Shipping</h3>
                            <div className="calc-choice-text u-s-m-b-4">Flat Rate: Not Available</div>
                            <div className="calc-choice-text u-s-m-b-4">Free Shipping: Not Available</div>

                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="calc-h3 u-s-m-b-0" id="tax-heading">Tax</h3>
                            <span> (estimated for your country)</span>
                        </td>
                        <td>
                            <span className="calc-text">$0.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="calc-h3 u-s-m-b-0">Total</h3>
                        </td>
                        <td>
                            <span className="calc-text">$${cartTotal(cart)}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillingInfo;
