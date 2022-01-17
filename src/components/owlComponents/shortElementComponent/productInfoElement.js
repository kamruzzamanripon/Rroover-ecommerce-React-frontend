import React from 'react';

const ProductInfoElement = ({product}) => {
    return (
        <div>
            <h6 className="item-title">
                <a href="single-product.html">{product.name}</a>
            </h6>
            <div className="item-stars">
                <div className="star" title="0 out of 5 - based on 0 Reviews">
                    <span style={{width: 0}}/>
                </div>
                <span>(0)</span>
            </div>

        </div>
    );
};

export default ProductInfoElement;
