import React,{Fragment,useState} from 'react';
import {Link} from 'react-router-dom';
import {useSingleProduct} from '../../../context/SingleProductContext';

function ProductDetails() {
  const singleProductInfo = useSingleProduct();
  const colorItem = singleProductInfo ? JSON.parse(singleProductInfo.color) : ["Color not available"];
  const sizeItem = singleProductInfo ? JSON.parse(singleProductInfo.size) : ["size not available"];
  const [numberCount, setNumberCount] = useState(1);
  //console.log(numberCount)
    return (
        <Fragment>
            <div className="all-information-wrapper">
                  <div className="section-1-title-breadcrumb-rating">
                    <div className="product-title">
                      <h1>
                        <Link to="single-product.html">{singleProductInfo ? singleProductInfo.name : ""}</Link>
                      </h1>
                    </div>
                    <ul className="bread-crumb">
                      <li className="has-separator">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="has-separator">
                        <Link to="shop-v1-root-category.html">{singleProductInfo ? singleProductInfo.category_info.name : ""}</Link>
                      </li>
                      <li className="has-separator">
                        <Link to="shop-v2-sub-category.html">{singleProductInfo ? singleProductInfo.subcategory_info.name : ""}</Link>
                      </li>
                    </ul>
                    <div className="product-rating">
                      <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                        <span style={{width: '67px'}} />
                      </div>
                      <span>(23)</span>
                    </div>
                  </div>
                  <div className="section-2-short-description u-s-p-y-14">
                    <h6 className="information-heading u-s-m-b-8">Description:</h6>
                    <p>{singleProductInfo ? singleProductInfo.details : ""}</p>
                  </div>
                  <div className="section-3-price-original-discount u-s-p-y-14">
                    <div className="price">
                      <h4>${singleProductInfo ? singleProductInfo.actual_price : ""}</h4>
                    </div>
                    <div className="original-price">
                      <span>Original Price:</span>
                      <span>${singleProductInfo ? singleProductInfo.actual_price : ""}</span>
                    </div>
                    <div className="discount-price">
                      <span>Discount:</span>
                      <span>{singleProductInfo ? singleProductInfo.discount_price : ""}%</span>
                    </div>
                    <div className="total-save">
                      <span>Save:</span>
                      <span>$5</span>
                    </div>
                  </div>
                  <div className="section-4-sku-information u-s-p-y-14">
                    <h6 className="information-heading u-s-m-b-8">Sku Information:</h6>
                    <div className="availability">
                      <span>Availability:</span>
                      <span>In Stock</span>
                    </div>
                    <div className="left">
                      <span>Only:</span>
                      <span>{singleProductInfo ? singleProductInfo.quantity : ""} left</span>
                    </div>
                  </div>

                  <div className="section-5-product-variants u-s-p-y-14">
                    <h6 className="information-heading u-s-m-b-8">Product Variants:</h6>

                    <div className="color u-s-m-b-11">
                      <span>Available Color:</span>
                      <div className="color-variant select-box-wrapper">

                        <select className="select-box product-color">
                          {colorItem.map((color, index)=>(
                              <option value={color} key={index}>{color}</option>
                          ))}
                        </select>

                      </div>
                    </div>

                    <div className="sizes u-s-m-b-11">
                      <span>Available Size:</span>

                      <div className="size-variant select-box-wrapper">
                        <select className="select-box product-size">
                          {sizeItem.map((size, index)=>(
                              <option value={size} key={index}>{size}</option>
                          ))}
                        </select>
                      </div>

                    </div>
                  </div>

                  <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                    <form action="#" className="post-form">
                      <div className="quick-social-media-wrapper u-s-m-b-22">
                        <span>Share:</span>
                        <ul className="social-media-list">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-rss" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="quantity-wrapper u-s-m-b-22">
                        <span>Quantity:</span>
                        <div className="quantity">
                          <input type="text" className="quantity-text-field" Value={numberCount} />
                          <a className="plus-a"  onClick={()=>setNumberCount(numberCount <= 100 ? numberCount + 1 : 1)}>+</a>
                          <a className="minus-a" onClick={()=>setNumberCount(numberCount > 0 ? numberCount - 1 : 1)}>-</a>
                        </div>
                      </div>

                      <div>
                        <button className="button button-outline-secondary" type="submit">Add to cart</button>
                        <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                        <button className="button button-outline-secondary far fa-envelope u-s-m-l-6" />
                      </div>
                    </form>
                  </div>
                </div>
        </Fragment>
    )
}

export default ProductDetails
