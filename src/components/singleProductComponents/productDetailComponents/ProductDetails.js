import React, {Fragment, useState, useEffect} from 'react';
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
import {userAuthId} from '../../../utilityHook/userAuthHook'

function ProductDetails() {

    const singleProductInfo = useSingleProduct();
    const Id = singleProductInfo ? singleProductInfo.id : '';
    const Price = singleProductInfo ? singleProductInfo.actual_price : '';
    const colorItem = singleProductInfo ? JSON.parse(singleProductInfo.color) : ["Color not available"];
    const sizeItem = singleProductInfo ? JSON.parse(singleProductInfo.size) : ["size not available"];

    const [productPrice, setProductPrice] = useState('');
    const [authId, setAuthId] = useState('');
    const [productId, setProductId] = useState('');
    const [productColor, setProductColor] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productQuentity, setProductQuentity] = useState('');

    useEffect(()=>{
        setProductPrice(Price);
        setAuthId(userAuthId);
        setProductId(Id)

    },[])
    // const [productInfo, setProductInfo] = useState({
    //     product_id : productId,
    //     user_id: userAuthId,
    //     color: '',
    // })

    const productInfo = {
        productId,
        userAuthId,
        productColor,
        productSize,
        productQuentity,
        productPrice
    }



    //console.log("single Product", productInfo)
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
                <ProductVariantsInformation
                    colorItem={colorItem}
                    sizeItem={sizeItem}
                    setProductColor={setProductColor}
                    setProductSize={setProductSize}

                />
                <AddToCartForm
                    productId={singleProductInfo ? singleProductInfo.id : ""}
                    setProductQuentity={setProductQuentity}
                    productInfo={productInfo}
                />

            </div>

        </Fragment>
    )
}

export default ProductDetails
