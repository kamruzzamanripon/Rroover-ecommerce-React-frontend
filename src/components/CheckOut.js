import React,{Fragment} from 'react'

function CheckOut() {
    return (
        <Fragment>
            <div className="page-checkout u-s-p-t-80">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    {/* First-Accordion */}
                    <div>
                        <div className="message-open u-s-m-b-24">
                        Returning customer?
                        <strong>
                            <a className="u-c-brand" data-toggle="collapse" href="#showlogin">Click here to login
                            </a>
                        </strong>
                        </div>
                        <div className="collapse u-s-m-b-24" id="showlogin">
                        <h6 className="collapse-h6">Welcome back! Sign in to your account.</h6>
                        <h6 className="collapse-h6">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</h6>
                        <form>
                            <div className="group-inline u-s-m-b-13">
                            <div className="group-1 u-s-p-r-16">
                                <label htmlFor="user-name-email">Username or Email
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="user-name-email" className="text-field" placeholder="Username / Email" />
                            </div>
                            <div className="group-2">
                                <label htmlFor="password">Password
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="password" className="text-field" placeholder="Password" />
                            </div>
                            </div>
                            <div className="u-s-m-b-13">
                            <button type="submit" className="button button-outline-secondary">Login</button>
                            <input type="checkbox" className="check-box" id="remember-me-token" />
                            <label className="label-text" htmlFor="remember-me-token">Remember me</label>
                            </div>
                            <div className="page-anchor">
                            <a href="#" className="u-c-brand">Lost your password?</a>
                            </div>
                        </form>
                        </div>
                    </div>
                    {/* First-Accordion /- */}
                    {/* Second Accordion */}
                    <div>
                        <div className="message-open u-s-m-b-24">
                        Have a coupon?
                        <strong>
                            <a className="u-c-brand" data-toggle="collapse" href="#showcoupon">Click here to enter your code</a>
                        </strong>
                        </div>
                        <div className="collapse u-s-m-b-24" id="showcoupon">
                        <h6 className="collapse-h6">
                            Enter your coupon code if you have one.
                        </h6>
                        <div className="coupon-field">
                            <label className="sr-only" htmlFor="coupon-code">Apply Coupon</label>
                            <input id="coupon-code" type="text" className="text-field" placeholder="Coupon Code" />
                            <button type="submit" className="button">Apply Coupon</button>
                        </div>
                        </div>
                    </div>
                    {/* Second Accordion /- */}
                    <form>
                        <div className="row">
                        {/* Billing-&-Shipping-Details */}
                        <div className="col-lg-6">
                            <h4 className="section-h4">Billing Details</h4>
                            {/* Form-Fields */}
                            <div className="group-inline u-s-m-b-13">
                            <div className="group-1 u-s-p-r-16">
                                <label htmlFor="first-name">First Name
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="first-name" className="text-field" />
                            </div>
                            <div className="group-2">
                                <label htmlFor="last-name">Last Name
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="last-name" className="text-field" />
                            </div>
                            </div>
                            <div className="u-s-m-b-13">
                            <label htmlFor="select-country">Country
                                <span className="astk">*</span>
                            </label>
                            <div className="select-box-wrapper">
                                <select className="select-box" id="select-country">
                                <option selected="selected" value>Choose your country...</option>
                                <option value>United Kingdom (UK)</option>
                                <option value>United States (US)</option>
                                <option value>United Arab Emirates (UAE)</option>
                                </select>
                            </div>
                            </div>
                            <div className="street-address u-s-m-b-13">
                            <label htmlFor="req-st-address">Street Address
                                <span className="astk">*</span>
                            </label>
                            <input type="text" id="req-st-address" className="text-field" placeholder="House name and street name" />
                            <label className="sr-only" htmlFor="opt-st-address" />
                            <input type="text" id="opt-st-address" className="text-field" placeholder="Apartment, suite unit etc. (optional)" />
                            </div>
                            <div className="u-s-m-b-13">
                            <label htmlFor="town-city">Town / City
                                <span className="astk">*</span>
                            </label>
                            <input type="text" id="town-city" className="text-field" />
                            </div>
                            <div className="u-s-m-b-13">
                            <label htmlFor="select-state">State / Country
                                <span className="astk"> *</span>
                            </label>
                            <div className="select-box-wrapper">
                                <select className="select-box" id="select-state">
                                <option selected="selected" value>Choose your state...</option>
                                <option value>Alabama</option>
                                <option value>Alaska</option>
                                <option value>Arizona</option>
                                </select>
                            </div>
                            </div>
                            <div className="u-s-m-b-13">
                            <label htmlFor="postcode">Postcode / Zip
                                <span className="astk">*</span>
                            </label>
                            <input type="text" id="postcode" className="text-field" />
                            </div>
                            <div className="group-inline u-s-m-b-13">
                            <div className="group-1 u-s-p-r-16">
                                <label htmlFor="email">Email address
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="email" className="text-field" />
                            </div>
                            <div className="group-2">
                                <label htmlFor="phone">Phone
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="phone" className="text-field" />
                            </div>
                            </div>
                            <div className="u-s-m-b-30">
                            <input type="checkbox" className="check-box" id="create-account" />
                            <label className="label-text" htmlFor="create-account">Create Account</label>
                            </div>
                            {/* Form-Fields /- */}
                            <h4 className="section-h4">Shipping Details</h4>
                            <div className="u-s-m-b-24">
                            <input type="checkbox" className="check-box" id="ship-to-different-address" data-toggle="collapse" data-target="#showdifferent" />
                            <label className="label-text" htmlFor="ship-to-different-address">Ship to a different address?</label>
                            </div>
                            <div className="collapse" id="showdifferent">
                            {/* Form-Fields */}
                            <div className="group-inline u-s-m-b-13">
                                <div className="group-1 u-s-p-r-16">
                                <label htmlFor="first-name-extra">First Name
                                    <span className="astk">*</span>
                                </label>
                                <input type="text" id="first-name-extra" className="text-field" />
                                </div>
                                <div className="group-2">
                                <label htmlFor="last-name-extra">Last Name
                                    <span className="astk">*</span>
                                </label>
                                <input type="text" id="last-name-extra" className="text-field" />
                                </div>
                            </div>
                            <div className="u-s-m-b-13">
                                <label htmlFor="select-country-extra">Country
                                <span className="astk">*</span>
                                </label>
                                <div className="select-box-wrapper">
                                <select className="select-box" id="select-country-extra">
                                    <option selected="selected" value>Choose your country...</option>
                                    <option value>United Kingdom (UK)</option>
                                    <option value>United States (US)</option>
                                    <option value>United Arab Emirates (UAE)</option>
                                </select>
                                </div>
                            </div>
                            <div className="street-address u-s-m-b-13">
                                <label htmlFor="req-st-address-extra">Street Address
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="req-st-address-extra" className="text-field" placeholder="House name and street name" />
                                <label className="sr-only" htmlFor="opt-st-address-extra" />
                                <input type="text" id="opt-st-address-extra" className="text-field" placeholder="Apartment, suite unit etc. (optional)" />
                            </div>
                            <div className="u-s-m-b-13">
                                <label htmlFor="town-city-extra">Town / City
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="town-city-extra" className="text-field" />
                            </div>
                            <div className="u-s-m-b-13">
                                <label htmlFor="select-state-extra">State / Country
                                <span className="astk"> *</span>
                                </label>
                                <div className="select-box-wrapper">
                                <select className="select-box" id="select-state-extra">
                                    <option selected="selected" value>Choose your state...</option>
                                    <option value>Alabama</option>
                                    <option value>Alaska</option>
                                    <option value>Arizona</option>
                                </select>
                                </div>
                            </div>
                            <div className="u-s-m-b-13">
                                <label htmlFor="postcode-extra">Postcode / Zip
                                <span className="astk">*</span>
                                </label>
                                <input type="text" id="postcode-extra" className="text-field" />
                            </div>
                            <div className="group-inline u-s-m-b-13">
                                <div className="group-1 u-s-p-r-16">
                                <label htmlFor="email-extra">Email address
                                    <span className="astk">*</span>
                                </label>
                                <input type="text" id="email-extra" className="text-field" />
                                </div>
                                <div className="group-2">
                                <label htmlFor="phone-extra">Phone
                                    <span className="astk">*</span>
                                </label>
                                <input type="text" id="phone-extra" className="text-field" />
                                </div>
                            </div>
                            {/* Form-Fields /- */}
                            </div>
                            <div>
                            <label htmlFor="order-notes">Order Notes</label>
                            <textarea className="text-area" id="order-notes" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                            </div>
                        </div>
                        {/* Billing-&-Shipping-Details /- */}
                        {/* Checkout */}
                        <div className="col-lg-6">
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
                                <tr>
                                    <td>
                                    <h6 className="order-h6">Casual Hoodie Full Cotton</h6>
                                    <span className="order-span-quantity">x 1</span>
                                    </td>
                                    <td>
                                    <h6 className="order-h6">$55.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h6 className="order-h6">Black Rock Dress with High Jewelery Necklace</h6>
                                    <span className="order-span-quantity">x 1</span>
                                    </td>
                                    <td>
                                    <h6 className="order-h6">$55.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h6 className="order-h6">Xiaomi Note 2 Black Color</h6>
                                    <span className="order-span-quantity">x 1</span>
                                    </td>
                                    <td>
                                    <h6 className="order-h6">$55.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h6 className="order-h6">Dell Inspiron 15</h6>
                                    <span className="order-span-quantity">x 1</span>
                                    </td>
                                    <td>
                                    <h6 className="order-h6">$55.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h3 className="order-h3">Subtotal</h3>
                                    </td>
                                    <td>
                                    <h3 className="order-h3">$220.00</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h3 className="order-h3">Shipping</h3>
                                    </td>
                                    <td>
                                    <h3 className="order-h3">$0.00</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h3 className="order-h3">Tax</h3>
                                    </td>
                                    <td>
                                    <h3 className="order-h3">$0.00</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h3 className="order-h3">Total</h3>
                                    </td>
                                    <td>
                                    <h3 className="order-h3">$220.00</h3>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="u-s-m-b-13">
                                <input type="radio" className="radio-box" name="payment-method" id="cash-on-delivery" />
                                <label className="label-text" htmlFor="cash-on-delivery">Cash on Delivery</label>
                            </div>
                            <div className="u-s-m-b-13">
                                <input type="radio" className="radio-box" name="payment-method" id="credit-card-stripe" />
                                <label className="label-text" htmlFor="credit-card-stripe">Credit Card (Stripe)</label>
                            </div>
                            <div className="u-s-m-b-13">
                                <input type="radio" className="radio-box" name="payment-method" id="paypal" />
                                <label className="label-text" htmlFor="paypal">Paypal</label>
                            </div>
                            <div className="u-s-m-b-13">
                                <input type="checkbox" className="check-box" id="accept" />
                                <label className="label-text no-color" htmlFor="accept">I’ve read and accept the
                                <a href="terms-and-conditions.html" className="u-c-brand">terms &amp; conditions</a>
                                </label>
                            </div>
                            <button type="submit" className="button button-outline-secondary">Place Order</button>
                            </div>
                        </div>
                        {/* Checkout /- */}
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CheckOut
