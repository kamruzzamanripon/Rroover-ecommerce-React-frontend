import React, { Fragment } from 'react';
import useBannerImageViewMoreContext from "../../context/homepage/sectionFetchContext/BannerImageViewMoreContextHook";


function BannerImageViewMore() {
   const {errors, loading, singleBanner} = useBannerImageViewMoreContext()
//console.log(singleBanner)
    return (
        <Fragment>
            {!loading ? (
                <div className="banner-image-view-more">
                    <div className="container">
                        <div className="image-banner u-s-m-y-40">
                            <a href="shop-v1-root-category.html" className="mx-auto banner-hover effect-dark-opacity">
                                <img className="img-fluid" src={singleBanner ? process.env.REACT_APP_ImagebaseUrl + singleBanner.image : ''} alt="Banner Image"/>

                            </a>
                        </div>
                        <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                            <a className="redirect-link" href="store-directory.html">
                                <span>View more on this category</span>
                            </a>
                        </div>
                    </div>
                </div>
            ) :
              "Loading..."
            }
        </Fragment>
    )
}

export default BannerImageViewMore
