import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {useCategoryProducts} from '../../context/SingleCategoryProductsContext';
import {useSubCategoryProduct} from '../../context/SubCategoryProductsContext';
import {useSingleBrandProducts} from '../../context/SingleBrandProductsContext';
import {useNewArrivalProducts} from '../../context/homepage/NewArrivalProductContext';
import {useExclusiveDealProducts} from '../../context/homepage/ExclusiveDealProductContext';
import {useFlashDealContextProducts} from '../../context/homepage/FlashDealProductContext';
import {useSuperSaleProducts} from '../../context/homepage/SuperSaleProductContext';
import HoverElement from "../owlComponents/shortElementComponent/hoverElement";
import ImageElement from "../owlComponents/shortElementComponent/imageElement";
import ProductInfoElement from "../owlComponents/shortElementComponent/productInfoElement";
import BreadCumbCategorySubCategory from "../owlComponents/shortElementComponent/breadCumbCategorySubCategory";
import ProductPriceInfoElement from "../owlComponents/shortElementComponent/productPriceInfoElement";
import HotSymbolElement from "../owlComponents/shortElementComponent/hotSymbolElement";
import SaleSymbolElement from "../owlComponents/shortElementComponent/saleSymbolElement";
import NoProductFoundElement from "../owlComponents/shortElementComponent/noProductFoundElement";

function RightComponent(props) {
    const [displayList, setDisplayList] = useState(true);
    const [displayGrid, setDisplayGrid] = useState(false);
    const [products, setProducts] = useState()

    //Category Products
    const categoryInfo = useCategoryProducts();
    //const products = categoryInfo ? categoryInfo.data : [];
    const categoryProducts = categoryInfo ? categoryInfo.data : [];

    //Sub-category Products
    const subCategoryInfo = useSubCategoryProduct();
    const subCategoryProducts = subCategoryInfo ? subCategoryInfo.data : [];
    console.log("subCategoryProducts", subCategoryProducts)

    //Brands Products
    const brandProductInfo = useSingleBrandProducts();
    const brandProducts = brandProductInfo ? brandProductInfo : [];

    //New Arrivals Products
    const newArrivalProductInfo = useNewArrivalProducts();
    const newArrivalProducts = newArrivalProductInfo ? newArrivalProductInfo : [];

    //Exclusive Deals Products
    const exclusiveDealProductInfo = useExclusiveDealProducts();
    const exclusiveDealProduct = exclusiveDealProductInfo ? exclusiveDealProductInfo : [];

    //Flash Deals products
    const flashDealProductsInfo = useFlashDealContextProducts();
    const flashDealProducts = flashDealProductsInfo ? flashDealProductsInfo : [];

    //Super Sales products
    const superSalesProductsInfo = useSuperSaleProducts();
    const superSalesProducts = superSalesProductsInfo ? superSalesProductsInfo : [];

    //console.log('flashDealProducts products', flashDealProducts);
    //console.log('products products', products);

    const setDisplayStyle = () => {
        setDisplayList(!displayList);
        setDisplayGrid(!displayGrid);
    };

    useEffect(() => {
        props.col === "12" ? setDisplayList(!displayList) : setDisplayList(!displayList)
        props.col === "12" ? setDisplayGrid(!displayGrid) : setDisplayGrid(!displayGrid)

    }, []);
    //console.log(products)

    useEffect(() => {
        if (categoryInfo) {
            setProducts(categoryProducts);
        } else if (subCategoryInfo) {
            setProducts(subCategoryProducts);
        } else if (brandProducts) {
            setProducts(brandProducts)
        }

    }, []);

    useEffect(() => {
        if (newArrivalProducts.length > 0) {
            setProducts(newArrivalProducts);
        } else if (exclusiveDealProduct.length > 0) {
            setProducts(exclusiveDealProduct);
        } else if (flashDealProducts.length > 0) {
            setProducts(flashDealProducts);
        } else if (superSalesProducts.length > 0) {
            setProducts(superSalesProducts);
        }
    });

    return (
        <Fragment>
            <div className={props.col === "12" ? 'col-lg-12 col-md-12 col-sm-12 pt-5' : 'col-lg-9 col-md-9 col-sm-12'}>

                {categoryInfo && (

                    <div className="page-bar clearfix">
                        <div className="shop-settings">
                            <a id="list-anchor" className={displayList === true ? 'active' : ' '}
                               onClick={setDisplayStyle}>
                                <i className="fas fa-th-list"/>
                            </a>
                            <a id="grid-anchor" onClick={setDisplayStyle}
                               className={displayGrid === true ? 'active' : ' '}>
                                <i className="fas fa-th"/>
                            </a>
                        </div>
                        {/* Toolbar Sorter 1  */}
                        <div className="toolbar-sorter">
                            <div className="select-box-wrapper">
                                <label className="sr-only" htmlFor="sort-by">Sort By</label>

                                <select className="select-box" id="sort-by"
                                        onChange={(e) => props.setSortOrder(e.target.value)}>

                                    <option>Sort By: Best Selling</option>
                                    <option value="1">Sort By: Latest</option>
                                    <option value="2">Sort By: Lowest Price</option>
                                    <option value="3">Sort By: Highest Price</option>
                                    <option value="4">Sort By: Best Rating</option>
                                </select>
                            </div>
                        </div>
                        {/* //end Toolbar Sorter 1  */}
                        {/* Toolbar Sorter 2  */}
                        <div className="toolbar-sorter-2">
                            <div className="select-box-wrapper">
                                <label className="sr-only" htmlFor="show-records">Show Records Per Page</label>

                                <select className="select-box" id="show-records"
                                        onChange={(e) => props.setShowProduct(e.target.value)}>
                                    <option>Sort By: Page Number</option>
                                    <option value="8">Show: 8</option>
                                    <option value="16">Show: 16</option>
                                    <option value="24">Show: 24</option>
                                </select>
                            </div>
                        </div>
                        {/* //end Toolbar Sorter 2  */}
                    </div>

                )}


                {/* Row-of-Product-Container */}
                <div
                    className={displayList === true ? 'row product-container list-style' : 'row product-container grid-style'}>

                    {products && products.length > 0 ? products.map((product, index) => {
                        const image = product ? JSON.parse(product.image) : ''

                        return <div
                            className={props.col === "12" ? 'product-item col-lg-2 col-md-6 col-sm-6' : 'product-item col-lg-4 col-md-6 col-sm-6'}>
                            <div className="item" key={index}>
                                <Link to={`/singleProduct/${product.id}`}>
                                    <div className="image-container">

                                        <ImageElement image={image[0]}/>
                                        <HoverElement productId={product.id}/>

                                    </div>
                                    <div className="item-content">
                                        <div className="what-product-is">

                                            {product.category_info && product.subcategory_info && (
                                                <BreadCumbCategorySubCategory
                                                    category_info={product.category_info}
                                                    subcategory_info={product.subcategory_info}
                                                />
                                            )};

                                            <ProductInfoElement product={product}/>

                                        </div>


                                        <ProductPriceInfoElement product={product}/>
                                    </div>

                                    <HotSymbolElement hot={product.hot}/>
                                    <SaleSymbolElement sale={product.sale}/>
                                </Link>
                            </div>
                        </div>
                    }) : (
                        <NoProductFoundElement/>
                    )}


                </div>
                {/* Row-of-Product-Container /- */}
            </div>
        </Fragment>
    )
}

export default RightComponent
