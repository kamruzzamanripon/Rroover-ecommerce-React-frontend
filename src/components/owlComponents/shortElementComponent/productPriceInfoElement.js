import React from 'react';

const ProductPriceInfoElement = ({product}) => {
    return (
        <div className="price-template">
            <div className="item-new-price">
                ${product.actual_price}
            </div>
            <div className="item-old-price">
                ${product.actual_price}
            </div>
        </div>
    );
};

export default ProductPriceInfoElement;
