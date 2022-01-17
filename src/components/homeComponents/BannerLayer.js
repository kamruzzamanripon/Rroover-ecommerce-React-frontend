import React, { Fragment, useEffect, useState } from 'react';
import ApiUrl from '../../api/ApiUrl';



function BannerLayer() {
    const api = new ApiUrl();
    const [singleBanner, setSingleBanner] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    useEffect( async ()=>{
        try{
            setLoading(true);
            setErrors({})
            const {data:{data}} = await api.getSingleSlug('single-banner');
            const bannerData = data[0];
            //console.log(data[0].sub_title)
            setSingleBanner(bannerData);
            setLoading(false);
        }catch (e) {
            console.log(e)
            setErrors(e)
        }
    },[]);
//console.log(singleBanner)
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
