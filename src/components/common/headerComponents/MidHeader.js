import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import MiniCart from './MiniCart'
import $ from 'jquery'

function MidHeader() {
  const [miniCartTigger, setMiniCartTigger] = useState(false)
  //console.log(miniCartTigger)

  const miniCartTiggerToggle =()=>{
    miniCartTigger === false ? setMiniCartTigger(true) : setMiniCartTigger(false)
  }

  
    return (
        <Fragment>
            <div className="full-layer-mid-header">
            <div className="container">
              <div className="row clearfix align-items-center">
                <div className="col-lg-3 col-md-9 col-sm-6">
                  <div className="brand-logo text-lg-center">
                    <Link to="/">
                      <img src="72.png" alt="Groover Brand Logo" className="app-brand-logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 u-d-none-lg">
                  <form className="form-searchbox">
                    <label className="sr-only" htmlFor="search-landscape">Search</label>
                    <input id="search-landscape" type="text" className="text-field" placeholder="Search everything" />
                    <div className="select-box-position">
                      <div className="select-box-wrapper select-hide">
                        <label className="sr-only" htmlFor="select-category">Choose category for search</label>
                        <select className="select-box" id="select-category">
                          <option value="1">
                            All
                          </option>
                          <option value="1">Men's Clothing</option>
                          <option value="2">Women's Clothing
                          </option>
                          <option value="3">Toys Hobbies &amp; Robots
                          </option>
                          <option value="4">Mobiles &amp; Tablets
                          </option>
                          <option value="5">Consumer Electronics
                          </option>
                          <option value="6">Books &amp; Audible
                          </option>
                          <option value="7">Beauty &amp; Health
                          </option>
                          <option value="8">Furniture Home &amp; Office
                          </option>
                        </select>
                      </div>
                    </div>
                    <button id="btn-search" type="submit" className="button button-primary fas fa-search" />
                  </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <nav>
                    <ul className="mid-nav g-nav">
                      <li className="u-d-none-lg">
                        <Link to="/">
                          <i className="ion ion-md-home u-c-brand" />
                        </Link>
                      </li>
                      <li className="u-d-none-lg">
                        <Link to="/wishlist">
                          <i className="far fa-heart" />
                        </Link>
                      </li>
                      <li>
                        <a id="mini-cart-trigger" onClick={miniCartTiggerToggle}>
                          <i className="ion ion-md-basket" />
                          <span className="item-counter">4</span>
                          <span className="item-price">$220.00</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

           {/* Responsive-Buttons */}
           <div className="fixed-responsive-container">
            <div className="fixed-responsive-wrapper">
              <button type="button" className="button fas fa-search" id="responsive-search"  />
            </div>
            <div className="fixed-responsive-wrapper">
              <a href="wishlist.html">
                <i className="far fa-heart" />
                <span className="fixed-item-counter">4</span>
              </a>
            </div>
          </div>
          {/* Responsive-Buttons /- */}

           {/* Mini Cart */}
           <MiniCart 
             miniCartTigger={miniCartTigger}
             miniCartTiggerToggle={miniCartTiggerToggle}
            />
           {/* Mini Cart /- */}

        </Fragment>
    )
}

export default MidHeader
