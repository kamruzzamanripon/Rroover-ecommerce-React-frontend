import React,{Fragment} from 'react'

function ReviewsTab() {
    return (
        <Fragment>
            <div className="tab-pane fade" id="review">
                      <div className="review-whole-container">
                        <div className="row r-1 u-s-m-b-26 u-s-p-b-22">
                          <div className="col-lg-6 col-md-6">
                            <div className="total-score-wrapper">
                              <h6 className="review-h6">Average Rating</h6>
                              <div className="circle-wrapper">
                                <h1>4.5</h1>
                              </div>
                              <h6 className="review-h6">Based on 23 Reviews</h6>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="total-star-meter">
                              <div className="star-wrapper">
                                <span>5 Stars</span>
                                <div className="star">
                                  <span style={{width: 0}} />
                                </div>
                                <span>(0)</span>
                              </div>
                              <div className="star-wrapper">
                                <span>4 Stars</span>
                                <div className="star">
                                  <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                              </div>
                              <div className="star-wrapper">
                                <span>3 Stars</span>
                                <div className="star">
                                  <span style={{width: 0}} />
                                </div>
                                <span>(0)</span>
                              </div>
                              <div className="star-wrapper">
                                <span>2 Stars</span>
                                <div className="star">
                                  <span style={{width: 0}} />
                                </div>
                                <span>(0)</span>
                              </div>
                              <div className="star-wrapper">
                                <span>1 Star</span>
                                <div className="star">
                                  <span style={{width: 0}} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row r-2 u-s-m-b-26 u-s-p-b-22">
                          <div className="col-lg-12">
                            <div className="your-rating-wrapper">
                              <h6 className="review-h6">Your Review is matter.</h6>
                              <h6 className="review-h6">Have you used this product before?</h6>
                              <div className="star-wrapper u-s-m-b-8">
                                <div className="star">
                                  <span id="your-stars" style={{width: 0}} />
                                </div>
                                <label htmlFor="your-rating-value" />
                                <input id="your-rating-value" type="text" className="text-field" placeholder={0.0} />
                                <span id="star-comment" />
                              </div>
                              <form>
                                <label htmlFor="your-name">Name
                                  <span className="astk"> *</span>
                                </label>
                                <input id="your-name" type="text" className="text-field" placeholder="Your Name" />
                                <label htmlFor="your-email">Email
                                  <span className="astk"> *</span>
                                </label>
                                <input id="your-email" type="text" className="text-field" placeholder="Your Email" />
                                <label htmlFor="review-title">Review Title
                                  <span className="astk"> *</span>
                                </label>
                                <input id="review-title" type="text" className="text-field" placeholder="Review Title" />
                                <label htmlFor="review-text-area">Review
                                  <span className="astk"> *</span>
                                </label>
                                <textarea className="text-area u-s-m-b-8" id="review-text-area" placeholder="Review" defaultValue={""} />
                                <button className="button button-outline-secondary">Submit Review</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* Get-Reviews */}
                        <div className="get-reviews u-s-p-b-22">
                          {/* Review-Options */}
                          <div className="review-options u-s-m-b-16">
                            <div className="review-option-heading">
                              <h6>Reviews
                                <span> (15) </span>
                              </h6>
                            </div>
                            <div className="review-option-box">
                              <div className="select-box-wrapper">
                                <label className="sr-only" htmlFor="review-sort">Review Sorter</label>
                                <select className="select-box" id="review-sort">
                                  <option value>Sort by: Best Rating</option>
                                  <option value>Sort by: Worst Rating</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          {/* Review-Options /- */}
                          {/* All-Reviews */}
                          <div className="reviewers">
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">John</h6>
                                <h6 className="review-posted-date">10 May 2018</h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{width: '67px'}} />
                                  </div>
                                  <span className="review-title">Good!</span>
                                </div>
                                <p className="review-body">
                                  Good Quality...!
                                </p>
                              </div>
                            </div>
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">Doe</h6>
                                <h6 className="review-posted-date">10 June 2018</h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{width: '67px'}} />
                                  </div>
                                  <span className="review-title">Well done!</span>
                                </div>
                                <p className="review-body">
                                  Cotton is good.
                                </p>
                              </div>
                            </div>
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">Tim</h6>
                                <h6 className="review-posted-date">10 July 2018</h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{width: '67px'}} />
                                  </div>
                                  <span className="review-title">Well done!</span>
                                </div>
                                <p className="review-body">
                                  Excellent condition
                                </p>
                              </div>
                            </div>
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">Johnny</h6>
                                <h6 className="review-posted-date">10 March 2018</h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{width: '67px'}} />
                                  </div>
                                  <span className="review-title">Bright!</span>
                                </div>
                                <p className="review-body">
                                  Cotton
                                </p>
                              </div>
                            </div>
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">Alexia C. Marshall</h6>
                                <h6 className="review-posted-date">12 May 2018</h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{width: '67px'}} />
                                  </div>
                                  <span className="review-title">Well done!</span>
                                </div>
                                <p className="review-body">
                                  Good polyester Cotton
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* All-Reviews /- */}
                          {/* Pagination-Review */}
                          <div className="pagination-review-area">
                            <div className="pagination-review-number">
                              <ul>
                                <li style={{display: 'none'}}>
                                  <a href="single-product.html" title="Previous">
                                    <i className="fas fa-angle-left" />
                                  </a>
                                </li>
                                <li className="active">
                                  <a href="single-product.html">1</a>
                                </li>
                                <li>
                                  <a href="single-product.html">2</a>
                                </li>
                                <li>
                                  <a href="single-product.html">3</a>
                                </li>
                                <li>
                                  <a href="single-product.html">...</a>
                                </li>
                                <li>
                                  <a href="single-product.html">10</a>
                                </li>
                                <li>
                                  <a href="single-product.html" title="Next">
                                    <i className="fas fa-angle-right" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Pagination-Review /- */}
                        </div>
                        {/* Get-Reviews /- */}
                      </div>
                    </div>
        </Fragment>
    )
}

export default ReviewsTab
