import React, {Fragment, useEffect, useState} from 'react'
import OwlCarouselComponents from "../owlComponents/owlCarouselComponents";
import ApiUrl from "../../api/ApiUrl";
import useMenClothingTimingSectionContext from '../../context/homepage/sectionFetchContext/MenClothingTimingSectionContextHook'
import CollapseTabItem from "../collapseTabComponents/CollapseTabItem";

function MenClothingTimingSection() {

    const {errors, loading, menHotDealProduts} = useMenClothingTimingSectionContext()

    return (
        <Fragment>

            <section className="section-maker">
                <div className="container">

                  <div className="sec-maker-header text-center">
                        <span className="sec-maker-span-text">Men's Clothing</span>
                        <h3 className="sec-maker-h3 u-s-m-b-22">Hot Deals</h3>

                    </div>

                    {/* Carousel */}
                    <div className="slider-foucxx">
                     {!loading ? <OwlCarouselComponents Products={menHotDealProduts}/> : "Loading..."}
                    </div>
                    {/* Carousel /- */}
                </div>
            </section>
        </Fragment>
    )
}

export default MenClothingTimingSection
