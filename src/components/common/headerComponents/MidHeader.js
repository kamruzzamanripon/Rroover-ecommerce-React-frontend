import React, {Fragment, useState, useEffect} from 'react'
import SearchForm from "./MidHeader/SearchForm";
import HomeIcon from "./MidHeader/HomeIcon";
import WishListIcon from "./MidHeader/WishListIcon";
import MiniCartTrigger from "./MidHeader/MiniCartTrigger";
import ResponsiveWishListIcon from "./MidHeader/ResponsiveWishListIcon";
import SearchFormSearchForm from "./MidHeader/SearchFormSearchForm";
import BrandLogo from "./MidHeader/BrandLogo";


function MidHeader() {


    return (
        <Fragment>
            <div className="full-layer-mid-header">
                <div className="container">
                    <div className="row clearfix align-items-center">
                        <div className="col-lg-3 col-md-9 col-sm-6">
                            <BrandLogo />
                        </div>

                        <div className="col-lg-6 u-d-none-lg">
                            <SearchForm/>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <nav>
                                <ul className="mid-nav g-nav">
                                    <HomeIcon/>
                                    <WishListIcon/>
                                    <MiniCartTrigger/>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive-Buttons */}
            <div className="fixed-responsive-container">
                <SearchFormSearchForm/>
                <ResponsiveWishListIcon/>
            </div>
            {/* Responsive-Buttons /- */}


        </Fragment>
    )
}

export default MidHeader
