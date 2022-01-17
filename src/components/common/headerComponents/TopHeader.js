import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

function TopHeader() {
    return (
        <Fragment>
           <div className="full-layer-outer-header">
            <div className="container clearfix">
              <nav>
                <ul className="primary-nav g-nav">
                  <li>
                    <a href="tel:+111444989">
                      <i className="fas fa-phone u-c-brand u-s-m-r-9" />
                      Telephone:+111-444-989</a>
                  </li>
                  <li>
                    <a href="mailto:contact@domain.com">
                      <i className="fas fa-envelope u-c-brand u-s-m-r-9" />
                      E-mail: contact@domain.com
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul className="secondary-nav g-nav">
                  <li>
                    <a>My Account
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
                    <ul className="g-dropdown" style={{width: '200px'}}>
                      <li>
                        <Link to="/cart">
                          <i className="fas fa-cog u-s-m-r-9" />
                          My Cart</Link>
                      </li>
                      <li>
                      <Link to="/wishlist">
                          <i className="far fa-heart u-s-m-r-9" />
                          My Wishlist</Link>
                      </li>
                      <li>
                      <Link to="/checkout">
                          <i className="far fa-check-circle u-s-m-r-9" />
                          Checkout</Link>
                      </li>
                      <li>
                      <Link to="/login">
                          <i className="fas fa-sign-in-alt u-s-m-r-9" />
                          Login / Signup</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>USD
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
                    <ul className="g-dropdown" style={{width: '90px'}}>
                      <li>
                        <a href="#" className="u-c-brand">($) USD</a>
                      </li>
                      <li>
                        <a href="#">(£) GBP</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>ENG
                      <i className="fas fa-chevron-down u-s-m-l-9" />
                    </a>
                    <ul className="g-dropdown" style={{width: '70px'}}>
                      <li>
                        <a href="#" className="u-c-brand">ENG</a>
                      </li>
                      <li>
                        <a href="#">ARB</a>
                      </li>
                    </ul>
                  </li></ul>
              </nav>
            </div>
          </div> 
        </Fragment>
    )
}

export default TopHeader
