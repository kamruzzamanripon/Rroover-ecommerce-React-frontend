import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import OwlCarouselComponents from '../owlComponents/owlCarouselComponents'

function MenClothing() {

    return (
        <Fragment>
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>

                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#men-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-best-selling-products">Best
                                    Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-featured-products">Featured
                                    Products</a>
                            </li>
                        </ul>

                    </div>

                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">

                                <div className="tab-pane active show fade" id="men-latest-products">
                                    <div className="slider-foucxx">

                                        <OwlCarouselComponents/>

                                    </div>
                                </div>


                                <div className="tab-pane fade" id="men-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>


                                <div className="tab-pane fade" id="men-top-rating-products">
                                    <div className="slider-foucxx">
                                        <OwlCarouselComponents/>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="men-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MenClothing
