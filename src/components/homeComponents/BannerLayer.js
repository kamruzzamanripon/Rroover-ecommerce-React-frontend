import React, { Fragment, useEffect, useState } from 'react';
import ApiUrl from '../../api/ApiUrl';
import useBannerLayerContext from '../../context/homepage/sectionFetchContext/BannerLayerContextHook'



function BannerLayer() {
   const {singleBanner, loading, errors} = useBannerLayerContext()
//console.log("BannerLayer Component")
    return (
        <Fragment>
            <div className="banner-layer">
              <div className="container">
                <div className="image-banner">
                    {!loading ?
                        (<a href="shop-v1-root-category.html" className="mx-auto banner-hover effect-dark-opacity">
                            <img className="img-fluid" src={singleBanner ? singleBanner.image : ''}
                                 alt="Winter Season Banner"/>
                        </a>)
                        :
                        (<h1>Loading...</h1>)
                    }
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default BannerLayer
