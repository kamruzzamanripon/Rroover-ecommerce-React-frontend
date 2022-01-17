import React,{Fragment} from 'react';
import {useSingleProduct} from '../../context/SingleProductContext'
import {useCategoryProducts} from '../../context/SingleCategoryProductsContext'
import {useSubCategoryProduct} from '../../context/SubCategoryProductsContext'
import {useSingleBrandProducts} from '../../context/SingleBrandProductsContext'

function PageIntroductionWrapper() {
    //Single Products
    const singleProductInfo = useSingleProduct();
    const singleProductBackgroundImage = singleProductInfo ? singleProductInfo.category_info.image : "";
    const singleProductCategoryName = singleProductInfo ? singleProductInfo.category_info.name : "";
    //console.log(singleProductInfo)

    //Category products
    const categoryInfo = useCategoryProducts();
    const categoryBackgroundImage = categoryInfo ? categoryInfo?.data[0]?.category?.image : "";
    const categoryName = categoryInfo ? categoryInfo?.data[0]?.category?.name: "";
    //console.log("categoryInfo wrapper", categoryInfo?.data[0]?.category.image)

    //SubCategory Products
    const subCategoryProduct = useSubCategoryProduct();
    const subCategoryBackgroundImage = subCategoryProduct ? subCategoryProduct?.data[0]?.subcategory?.image : "";
    const subCategoryName = subCategoryProduct ? subCategoryProduct?.data[0]?.subcategory?.name : "";
    //console.log("subCategoryProduct", subCategoryProduct)
    //console.log("subCategoryBackgroundImage", subCategoryBackgroundImage)

    //Brand Products
    const brandProducts = useSingleBrandProducts();
    const brandBackgroundImage = brandProducts ? brandProducts[0]?.brand?.image : "";
    const brandName = brandProducts ? brandProducts[0]?.brand?.name : "";

    //console.log("brandBackgroundImage", brandBackgroundImage)

    return (
        <Fragment>
            <div
                className="page-style-a"
                style={{ backgroundImage: `url(${singleProductBackgroundImage  ||  categoryBackgroundImage || subCategoryBackgroundImage || brandBackgroundImage })` }}
            >
            <div className="container">
                <div className="page-intro">
                <h2>{singleProductCategoryName}</h2>
                <ul className="bread-crumb">
                    <li className="has-separator">
                    <i className="ion ion-md-home" />
                    <a href="home.html">Home</a>
                    </li>
                    <li className="is-marked">
                    <a href="single-product.html">{singleProductCategoryName || categoryName || subCategoryName || brandName}</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default PageIntroductionWrapper
