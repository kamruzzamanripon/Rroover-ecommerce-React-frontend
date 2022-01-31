import React,{Fragment} from 'react';

const PaymentType = ({setPaymentMethod}) => {
    return (
        <Fragment>
            <div className="u-s-m-b-13">
                <input type="radio" className="radio-box" name="payment-method"
                       id="cash-on-delivery" value="Cash on Delivery"
                       onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label className="label-text" htmlFor="cash-on-delivery">Cash on
                    Delivery</label>
            </div>
            <div className="u-s-m-b-13">
                <input type="radio" className="radio-box" name="payment-method"
                       id="credit-card-stripe" value="Credit Card"
                       onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label className="label-text" htmlFor="credit-card-stripe">Credit Card
                    (Stripe)</label>
            </div>
            <div className="u-s-m-b-13">
                <input type="radio" className="radio-box" name="payment-method"
                       id="paypal" value="Paypal"
                       onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label className="label-text" htmlFor="paypal">Paypal</label>
            </div>
        </Fragment>
    );
};

export default PaymentType;
