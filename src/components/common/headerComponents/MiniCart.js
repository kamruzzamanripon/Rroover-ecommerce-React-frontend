import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

function MiniCart(props) {
  

  const miniCartTigger = ()=>{
    props.miniCartTiggerToggle()
  }
    return (
        <Fragment>

           <div className={ props.miniCartTigger===true ? 'mini-cart-open mini-cart-wrapper' : 'mini-cart-wrapper' } >
            <div className="mini-cart">
              <div className="mini-cart-header">
                YOUR CART
                <button type="button" className="button ion ion-md-close" id="mini-cart-close" onClick={miniCartTigger} />
              </div>
              <ul className="mini-cart-list">
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" alt="Product" />
                    <span className="mini-item-name">Casual Hoodie Full Cotton</span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" alt="Product" />
                    <span className="mini-item-name">Black Rock Dress with High Jewelery Necklace</span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" alt="Product" />
                    <span className="mini-item-name">Xiaomi Note 2 Black Color</span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
                <li className="clearfix">
                  <a href="single-product.html">
                    <img src="images/product/product@1x.jpg" alt="Product" />
                    <span className="mini-item-name">Dell Inspiron 15</span>
                    <span className="mini-item-price">$55.00</span>
                    <span className="mini-item-quantity"> x 1 </span>
                  </a>
                </li>
              </ul>
              <div className="mini-shop-total clearfix">
                <span className="mini-total-heading float-left">Total:</span>
                <span className="mini-total-price float-right">$220.00</span>
              </div>
              <div className="mini-action-anchors">
                <Link to="/cart" className="cart-anchor">View Cart</Link>
                <Link to="/checkout" className="checkout-anchor">Checkout</Link>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default MiniCart
