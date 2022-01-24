import React from 'react';

const PriceDetails = ({singleProductInfo}) => {
    return (
        <div className="section-3-price-original-discount u-s-p-y-14">
            <div className="price">
                <h4>${singleProductInfo ? singleProductInfo.actual_price : ""}</h4>
            </div>
            <div className="original-price">
                <span>Original Price:</span>
                <span>${singleProductInfo ? singleProductInfo.actual_price : ""}</span>
            </div>
            <div className="discount-price">
                <span>Discount:</span>
                <span>{singleProductInfo ? singleProductInfo.discount_price : ""}%</span>
            </div>
            <div className="total-save">
                <span>Save:</span>
                <span>$5</span>
            </div>
        </div>
    );
};

export default PriceDetails;
