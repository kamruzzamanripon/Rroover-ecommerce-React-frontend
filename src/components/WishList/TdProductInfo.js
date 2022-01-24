import React from 'react';

const TdProductInfo = ({src, name}) => {
    return (
        <td>
            <div className="cart-anchor-image">
                <a href="single-product.html">
                    <img src={src} alt="Product"/>
                    <h6>{name}</h6>
                </a>
            </div>
        </td>
    );
};

export default TdProductInfo;
