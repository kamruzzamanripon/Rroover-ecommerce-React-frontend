import React from 'react';

const SkuInformation = ({singleProductInfo}) => {
    return (
        <div className="section-4-sku-information u-s-p-y-14">
            <h6 className="information-heading u-s-m-b-8">Sku Information:</h6>
            <div className="availability">
                <span>Availability:</span>
                <span>In Stock</span>
            </div>
            <div className="left">
                <span>Only:</span>
                <span>{singleProductInfo ? singleProductInfo.quantity : ""} left</span>
            </div>
        </div>
    );
};

export default SkuInformation;
