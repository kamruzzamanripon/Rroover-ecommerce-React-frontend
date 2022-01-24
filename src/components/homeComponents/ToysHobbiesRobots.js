import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import CollapseTabItem from "../collapseTabComponents/CollapseTabItem";
import CollapseTigerItem from "../collapseTabComponents/CollapseTigerItem";
import ApiUrl from "../../api/ApiUrl";
import useToysHobbiesRobotsContextHook from "../../context/homepage/sectionFetchContext/ToysHobbiesRobotsContextHook";

function ToysHobbiesRobots() {

    const {topRatingProduts, menProduts, latestProduct, featureProduts, bestSellingProduts, errors, loading} = useToysHobbiesRobotsContextHook()


    useEffect(() => {
        latestProduct()
    }, []);

    //console.log(loading)
    return (
        <Fragment>
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Toys Hobbies &amp; Robots</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <CollapseTigerItem className="nav-link active" href="#men-latest-products"
                                               onClick={latestProduct} title="Latest
                                    Products"/>
                            <CollapseTigerItem className="nav-link" href="#men-best-selling-products"
                                               onClick={bestSellingProduts} title="Best
                                    Selling"/>
                            <CollapseTigerItem className="nav-link" href="#men-top-rating-products"
                                               onClick={topRatingProduts} title="Top Rating"/>
                            <CollapseTigerItem className="nav-link" href="#men-featured-products"
                                               onClick={featureProduts} title="Featured
                                    Products"/>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                {!loading ?
                                    <CollapseTabItem className="tab-pane active show fade" id="men-latest-products"
                                                     Products={menProduts}/> : "Loading..."}

                                {!loading ? <CollapseTabItem className="tab-pane fade" id="men-best-selling-products"
                                                             Products={menProduts}/> : "Loading..."}

                                {!loading ? <CollapseTabItem className="tab-pane fade" id="men-top-rating-products"
                                                             Products={menProduts}/> : "Loading..."}

                                {!loading ? <CollapseTabItem className="tab-pane fade" id="men-featured-products"
                                                             Products={menProduts}/> : "Loading..."}
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <Link className="redirect-link" to="store-directory.html">
                            <span>View more on this category</span>
                        </Link>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ToysHobbiesRobots
