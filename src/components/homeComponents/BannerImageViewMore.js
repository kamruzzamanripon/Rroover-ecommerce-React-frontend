import React, {Fragment, useEffect, useState} from 'react';
import ApiUrl from '../../api/ApiUrl';


function BannerImageViewMore() {
    const api = new ApiUrl();
    const [singleBanner, setSingleBanner] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(async () => {
        try {
            setLoading(true);
            setErrors({})
            const {data: {data}} = await api.getSingleSlug('single-banner');
            const bannerData = data[0];
            //console.log(data[0].sub_title)
            setSingleBanner(bannerData);
            setLoading(false);
        } catch (e) {
            console.log(e)
            setErrors({e})
        }
    }, []);
//console.log(singleBanner)
    return (
        <Fragment>
            {!loading ? (
                <div className="banner-image-view-more">
                    <div className="container">
                        <div className="image-banner u-s-m-y-40">
                            <a href="shop-v1-root-category.html" className="mx-auto banner-hover effect-dark-opacity">
                                <img className="img-fluid" src={singleBanner ? singleBanner.image : ''} alt="Banner Image"/>

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
