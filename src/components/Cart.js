import React, {Fragment} from 'react'
import CartItems from "./cartComponent/CartItems";
import BillingInfo from "./cartComponent/BillingInfo";


function Cart() {
    return (
        <Fragment>
            <div className="page-cart u-s-p-t-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <CartItems/>
                            <BillingInfo/>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
