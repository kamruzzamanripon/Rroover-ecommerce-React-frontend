import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function OwlSmallFiveSlide({listItems}) {
    const optionsMenProduct = {
        autoplay: true,
        autoplayTimeout: 8000,
        loop: false,
        dots: false,
        rewind: true,
        nav: true,
        navElement: 'div',
        navClass: ['brand-slider-previous', 'brand-slider-next'],
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            991: {
                items: 5,
            },
            1200: {
                items: 5,
            },
        }
    };
//console.log(listItems)
    return (
        <Fragment>
            <OwlCarousel
                className="brand-slider-content owl-theme"
                {...optionsMenProduct}
            >
                {(listItems && listItems !== 0) ? (
                    listItems.map((item, index)=>{
                        //console.log("brand product", item)
                        return(
                            <div className="brand-pic" key={index}>
                                <Link to={`/single-brand/${item.id}`}>
                                    <img src={process.env.REACT_APP_ImagebaseUrl + item.image} alt="Brand Logo 1" />
                                </Link>
                            </div>
                        )
                    })
                ) : "Data is not available"}




            </OwlCarousel>

        </Fragment>
    )
}

export default OwlSmallFiveSlide
