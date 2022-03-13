import React, { Fragment } from 'react';
import useBannerLayerContext from '../../context/homepage/sectionFetchContext/BannerLayerContextHook';



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
                            <img className="img-fluid" src={singleBanner ? (process.env.REACT_APP_ImagebaseUrl +singleBanner.image) : 'https://via.placeholder.com/1200'}
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
