import React from 'react';

const ProductVariantsInformation = ({colorItem, sizeItem, setProductColor, setProductSize}) => {
    return (
        <div className="section-5-product-variants u-s-p-y-14">
            <h6 className="information-heading u-s-m-b-8">Product Variants:</h6>

            <div className="color u-s-m-b-11">
                <span>Available Color:</span>
                <div className="color-variant select-box-wrapper">

                    <select className="select-box product-color" onClick={(e) => setProductColor(e.target.value)}>
                            <option>Select color</option>
                        {colorItem.map((color, index) => (
                            <option value={color} key={index}>{color}</option>
                        ))}
                    </select>

                </div>
            </div>

            <div className="sizes u-s-m-b-11">
                <span>Available Size:</span>

                <div className="size-variant select-box-wrapper">
                    <select className="select-box product-size" onChange={(e) => setProductSize(e.target.value)}>
                        <option>Select Size</option>
                        {sizeItem.map((size, index) => (
                            <option value={size} key={index}>{size}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    );
};

export default ProductVariantsInformation;
