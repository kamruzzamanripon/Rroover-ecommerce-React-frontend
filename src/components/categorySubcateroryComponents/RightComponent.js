import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {useCategoryProducts} from '../../context/SingleCategoryProductsContext'
import {useSubCategoryProduct} from '../../context/SubCategoryProductsContext'
import {useSingleBrandProducts} from '../../context/SingleBrandProductsContext'
import {useNewArrivalProducts} from '../../context/homepage/NewArrivalProductContext'
import {useExclusiveDealProducts} from '../../context/homepage/ExclusiveDealProductContext'
import {useFlashDealContextProducts} from '../../context/homepage/FlashDealProductContext'
import {useSuperSaleProducts} from '../../context/homepage/SuperSaleProductContext'

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
        setDisplayList(!displayList)
        setDisplayGrid(!displayGrid)
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

    }, [])

    useEffect(()=>{
        if(newArrivalProducts.length>0 ){
            setProducts(newArrivalProducts);
        }else if(exclusiveDealProduct.length>0){
            setProducts(exclusiveDealProduct);
        }else if(flashDealProducts.length>0){
            setProducts(flashDealProducts);
        }else if(superSalesProducts.length>0){
            setProducts(superSalesProducts);
        }
    })

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

                        return <div className={props.col === "12" ? 'product-item col-lg-2 col-md-6 col-sm-6' : 'product-item col-lg-4 col-md-6 col-sm-6'}>
                            <div className="item" key={index}>
                                <Link to={`/singleProduct/${product.id}`}>
                                    <div className="image-container">
                                        <a className="item-img-wrapper-link" href="#">
                                            <img className="img-fluid" src={image[0]} alt="Product"/>
                                        </a>
                                        <div className="item-action-behaviors">
                                            <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick
                                                Look
                                            </a>
                                            <a className="item-mail" href="#">Mail</a>
                                            <a className="item-addwishlist" href="#">Add to Wishlist</a>
                                            <a className="item-addCart" href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <div className="what-product-is">
                                            {product.category_info && product.subcategory_info && (
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">{product.category_info ? product.category_info.name : ""}</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">{product.subcategory_info ? product.subcategory_info.name : ""}</a>
                                                    </li>

                                                </ul>
                                            )}


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
                                        <div className="price-template">
                                            <div className="item-new-price">
                                                ${product.actual_price}
                                            </div>
                                            <div className="item-old-price">
                                                ${product.actual_price}
                                            </div>
                                        </div>
                                    </div>

                                    {product.hot ? (
                                        <div className="tag new">
                                            <span>NEW</span>
                                        </div>
                                    ) : ''}

                                    {product.sale ? (
                                        <div className="tag sale">
                                            <span>SALE</span>
                                        </div>
                                    ) : ''}
                                </Link>
                            </div>
                        </div>
                    }) : "No Product is available"}


                </div>
                {/* Row-of-Product-Container /- */}
            </div>
        </Fragment>
    )
}

export default RightComponent
