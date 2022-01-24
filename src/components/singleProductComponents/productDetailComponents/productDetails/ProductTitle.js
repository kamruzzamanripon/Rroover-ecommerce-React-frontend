import React from 'react';
import {Link} from "react-router-dom";

const ProductTitle = ({singleProductInfo}) => {
    return (
        <div className="product-title">
            <h1>
                <Link to="single-product.html">{singleProductInfo ? singleProductInfo.name : ""}</Link>
            </h1>
        </div>
    );
};

export default ProductTitle;
