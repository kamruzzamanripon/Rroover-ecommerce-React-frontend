import React, {Fragment, useEffect, useState} from 'react'
import CollapseTabItem from "../collapseTabComponents/CollapseTabItem";
import CollapseTigerItem from "../collapseTabComponents/CollapseTigerItem";
import useMenClothingContext from '../../context/homepage/sectionFetchContext/MenClothingContextHook'

function MenClothing() {

    const {featureProduts, topRatingProduts, bestSellingProduts, latestProduct, errors, loading, menProduts} = useMenClothingContext()

    useEffect( () => {
        latestProduct()
    }, []);

    //const imagex = menProduts ? JSON.parse(menProduts.image) : ''
    //console.log(menProduts)
    return (
        <Fragment>
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>

                        <ul className="nav tab-nav-style-1-a justify-content-center">

                            <CollapseTigerItem className="nav-link active" href="#men-latest-products" onClick={latestProduct} title="Latest
                                    Products" />
                            <CollapseTigerItem className="nav-link" href="#men-best-selling-products" onClick={bestSellingProduts} title="Best
                                    Selling" />
                            <CollapseTigerItem className="nav-link" href="#men-top-rating-products" onClick={topRatingProduts} title="Top Rating" />
                            <CollapseTigerItem className="nav-link" href="#men-featured-products" onClick={featureProduts} title="Featured
                                    Products" />

                        </ul>

                    </div>

                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">

                              {!loading ? <CollapseTabItem className="tab-pane active show fade" id="men-latest-products" Products={menProduts}/> : "Loading..."}

                              {!loading ? <CollapseTabItem className="tab-pane fade" id="men-best-selling-products" Products={menProduts}/> : "Loading..." }

                              {!loading ? <CollapseTabItem className="tab-pane fade" id="men-top-rating-products" Products={menProduts}/> : "Loading..." }

                              {!loading ? <CollapseTabItem className="tab-pane fade" id="men-featured-products" Products={menProduts}/> : "Loading..." }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MenClothing
