import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import HoverElement from "./shortElementComponent/hoverElement";
import ImageElement from "./shortElementComponent/imageElement";
import HotSymbolElement from "./shortElementComponent/hotSymbolElement";
import SaleSymbolElement from "./shortElementComponent/saleSymbolElement";
import NoProductFoundElement from "./shortElementComponent/noProductFoundElement";
import BreadCumbCategorySubCategory from "./shortElementComponent/breadCumbCategorySubCategory";
import ProductInfoElement from "./shortElementComponent/productInfoElement";
import ProductPriceInfoElement from "./shortElementComponent/productPriceInfoElement";

function OwlCarouselComponents({Products}) {
    const optionsMenProduct = {
        autoplay: false,
        loop: false,
        dots: false,
        rewind: true,
        nav: true,
        navElement: 'div',
        navClass: ['product-slider-previous', 'product-slider-next'],
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    };
    //console.log(Products)
    return (
        <Fragment>
            <OwlCarousel
                className='owl-theme products-slider'
                {...optionsMenProduct}
            >
                {/* <div className="products-slider owl-carousel" data-item={4}> */}

                {(Products && Products.length !== 0) ? (
                    Products.map((product, index) => {
                        const image = product ? JSON.parse(product.image) : '';

                        //console.log(image)
                        return <div className="item" key={index}>
                            <Link to={`/singleProduct/${product.id}`}>

                                <div className="image-container">
                                    <ImageElement image={image[0]}/>
                                    <HoverElement productId={product.id} image={image[0]} />
                                </div>

                                <div className="item-content">
                                    <div className="what-product-is">

                                        {product.category_info && product.subcategory_info && (
                                            <BreadCumbCategorySubCategory
                                                category_info={product.category_info}
                                                subcategory_info={product.subcategory_info}
                                            />
                                        )}

                                        <ProductInfoElement product={product}/>

                                    </div>


                                    <ProductPriceInfoElement product={product}/>

                                </div>


                                <HotSymbolElement hot={product.hot}/>
                                <SaleSymbolElement sale={product.sale}/>

                            </Link>
                        </div>
                    })
                ) : (
                    <NoProductFoundElement/>
                )}


            </OwlCarousel>
        </Fragment>
    )
}

export default OwlCarouselComponents
