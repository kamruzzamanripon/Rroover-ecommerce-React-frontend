import React, { Fragment } from 'react';
import { useSingleProduct } from '../../../context/SingleProductContext';

function DescriptionTab() {
    const singleProductInfo = useSingleProduct();
    const productImage = singleProductInfo ? JSON.parse(singleProductInfo.image) : ""
    const videoLink = singleProductInfo ? singleProductInfo.video_link : ""
    return (
        <Fragment>
            <div className="tab-pane fade active show" id="description">
                      <div className="description-whole-container">

                          <p className="desc-p u-s-m-b-26">{singleProductInfo ? singleProductInfo.details : "Product Details not available"}</p>

                          <img className="desc-img img-fluid u-s-m-b-26" src={singleProductInfo ? process.env.REACT_APP_ImagebaseUrl + productImage[0] : ""} alt={singleProductInfo ? process.env.REACT_APP_ImagebaseUrl + singleProductInfo.name : "Product Name"} />
                          {videoLink ? (
                              <iframe className="desc-iframe u-s-m-b-45" width={710} height={400} src={singleProductInfo ? singleProductInfo.video_link : "video_link not available"} allowFullScreen />
                          ) : (
                              <img className="desc-img img-fluid u-s-m-b-26" src={singleProductInfo ? process.env.REACT_APP_ImagebaseUrl + productImage[0] : ""} alt={singleProductInfo ? process.env.REACT_APP_ImagebaseUrl + singleProductInfo.name : "Product Name"} />
                          )}


                      </div>
                    </div>
        </Fragment>
    )
}

export default DescriptionTab
