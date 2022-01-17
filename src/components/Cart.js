import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

function Cart() {
    return (
        <Fragment>
            <div className="page-cart u-s-p-t-80">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
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
                            <tr>
                                <td>
                                <div className="cart-anchor-image">
                                    <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Casual Hoodie Full Cotton</h6>
                                    </a>
                                </div>
                                </td>
                                <td>
                                <div className="cart-price">
                                    $55.00
                                </div>
                                </td>
                                <td>
                                <div className="cart-quantity">
                                    <div className="quantity">
                                    <input type="text" className="quantity-text-field" defaultValue={1} />
                                    <a className="plus-a" data-max={1000}>+</a>
                                    <a className="minus-a" data-min={1}>-</a>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="action-wrapper">
                                    <button className="button button-outline-secondary fas fa-sync" />
                                    <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="cart-anchor-image">
                                    <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Black Rock Dress with High Jewelery Necklace</h6>
                                    </a>
                                </div>
                                </td>
                                <td>
                                <div className="cart-price">
                                    $55.00
                                </div>
                                </td>
                                <td>
                                <div className="cart-quantity">
                                    <div className="quantity">
                                    <input type="text" className="quantity-text-field" defaultValue={1} />
                                    <a className="plus-a" data-max={1000}>+</a>
                                    <a className="minus-a" data-min={1}>-</a>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="action-wrapper">
                                    <button className="button button-outline-secondary fas fa-sync" />
                                    <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="cart-anchor-image">
                                    <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Xiaomi Note 2 Black Color</h6>
                                    </a>
                                </div>
                                </td>
                                <td>
                                <div className="cart-price">
                                    $55.00
                                </div>
                                </td>
                                <td>
                                <div className="cart-quantity">
                                    <div className="quantity">
                                    <input type="text" className="quantity-text-field" defaultValue={1} />
                                    <a className="plus-a" data-max={1000}>+</a>
                                    <a className="minus-a" data-min={1}>-</a>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="action-wrapper">
                                    <button className="button button-outline-secondary fas fa-sync" />
                                    <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="cart-anchor-image">
                                    <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Dell Inspiron 15</h6>
                                    </a>
                                </div>
                                </td>
                                <td>
                                <div className="cart-price">
                                    $55.00
                                </div>
                                </td>
                                <td>
                                <div className="cart-quantity">
                                    <div className="quantity">
                                    <input type="text" className="quantity-text-field" defaultValue={1} />
                                    <a className="plus-a" data-max={1000}>+</a>
                                    <a className="minus-a" data-min={1}>-</a>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="action-wrapper">
                                    <button className="button button-outline-secondary fas fa-sync" />
                                    <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                                </td>
                            </tr>
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
                    {/* Billing */}
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
                                <span className="calc-text">$222.00</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <h3 className="calc-h3 u-s-m-b-8">Shipping</h3>
                                <div className="calc-choice-text u-s-m-b-4">Flat Rate: Not Available</div>
                                <div className="calc-choice-text u-s-m-b-4">Free Shipping: Not Available</div>
                                <a data-toggle="collapse" href="#shipping-calculation" className="calc-anchor u-s-m-b-4">Calculate Shipping
                                </a>
                                <div className="collapse" id="shipping-calculation">
                                    <form>
                                    <div className="select-country-wrapper u-s-m-b-8">
                                        <div className="select-box-wrapper">
                                        <label className="sr-only" htmlFor="select-country">Choose your country
                                        </label>
                                        <select className="select-box" id="select-country">
                                            <option selected="selected" value>Choose your country...
                                            </option>
                                            <option value>United Kingdom (UK)</option>
                                            <option value>United States (US)</option>
                                            <option value>United Arab Emirates (UAE)</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="select-state-wrapper u-s-m-b-8">
                                        <div className="select-box-wrapper">
                                        <label className="sr-only" htmlFor="select-state">Choose your state
                                        </label>
                                        <select className="select-box" id="select-state">
                                            <option selected="selected" value>Choose your state...
                                            </option>
                                            <option value>Alabama</option>
                                            <option value>Alaska</option>
                                            <option value>Arizona</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="town-city-div u-s-m-b-8">
                                        <label className="sr-only" htmlFor="town-city" />
                                        <input type="text" id="town-city" className="text-field" placeholder="Town / City" />
                                    </div>
                                    <div className="postal-code-div u-s-m-b-8">
                                        <label className="sr-only" htmlFor="postal-code" />
                                        <input type="text" id="postal-code" className="text-field" placeholder="Postcode / Zip" />
                                    </div>
                                    <div className="update-totals-div u-s-m-b-8">
                                        <button className="button button-outline-platinum">Update Totals</button>
                                    </div>
                                    </form>
                                </div>
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
                                <span className="calc-text">$220.00</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    {/* Billing /- */}
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
