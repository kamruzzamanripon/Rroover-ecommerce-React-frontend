import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

function MidFooter() {
    return (
        <Fragment>
            <div className="mid-footer-wrapper u-s-p-b-80">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>CUSTOMER SERVICE</h6>
                    <ul>
                      <li>
                        <Link to="/faq">FAQs</Link>
                      </li>
                      <li>
                        <Link to="/track-order">Track Order</Link>
                      </li>
                      <li>
                        <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>COMPANY</h6>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>INFORMATION</h6>
                    <ul>
                      <li>
                        <Link to="/directory">Categories Directory</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">My Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/cart">My Cart</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>Address</h6>
                    <ul>
                      <li>
                        <i className="fas fa-location-arrow u-s-m-r-9" />
                        <span>819 Sugar Camp Road, West Concord, MN 55985</span>
                      </li>
                      <li>
                        <a href="tel:+923086561801">
                          <i className="fas fa-phone u-s-m-r-9" />
                          <span>+111-444-989</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:contact@domain.com">
                          <i className="fas fa-envelope u-s-m-r-9" />
                          <span>
                            contact@domain.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default MidFooter
