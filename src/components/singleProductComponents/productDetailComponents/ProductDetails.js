import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSingleProduct} from '../../../context/SingleProductContext';
import BreadCumbCategorySubCategory from "../../owlComponents/shortElementComponent/breadCumbCategorySubCategory";
import Rating from "./productDetails/Rating";
import Description from "./productDetails/Description";
import PriceDetails from "./productDetails/PriceDetails";
import SkuInformation from "./productDetails/SkuInformation";
import ProductVariantsInformation from "./productDetails/ProductVariantsInformation";
import SocialShareInformation from "./productDetails/SocialShareInformation";
import AddToCartForm from "./productDetails/AddToCartForm";
import ProductTitle from "./productDetails/ProductTitle";

function ProductDetails() {
    const singleProductInfo = useSingleProduct();
    const colorItem = singleProductInfo ? JSON.parse(singleProductInfo.color) : ["Color not available"];
    const sizeItem = singleProductInfo ? JSON.parse(singleProductInfo.size) : ["size not available"];

    //console.log(singleProductInfo.id)
    return (
        <Fragment>

            <div className="all-information-wrapper">

              <div className="section-1-title-breadcrumb-rating">

                    <ProductTitle singleProductInfo={singleProductInfo} />
                    <BreadCumbCategorySubCategory
                        homeLink={true}
                        category_info={singleProductInfo ? singleProductInfo.category_info : ""}
                        subcategory_info={singleProductInfo ? singleProductInfo.subcategory_info : ""}
                    />
                    <Rating/>
                </div>

                <Description singleProductInfo={singleProductInfo}/>
                <PriceDetails singleProductInfo={singleProductInfo}/>
                <SkuInformation singleProductInfo={singleProductInfo}/>
                <ProductVariantsInformation colorItem={colorItem} sizeItem={sizeItem}/>
                <AddToCartForm productId={singleProductInfo ? singleProductInfo.id : ""}/>

            </div>

        </Fragment>
    )
}

export default ProductDetails
