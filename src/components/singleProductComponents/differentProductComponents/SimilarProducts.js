import React,{Fragment} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useSingleProduct} from '../../../context/SingleProductContext';
import OwlCarouselComponents from "../../owlComponents/owlCarouselComponents";

function SimilarProducts() {
  const singleProductInfo = useSingleProduct();
  const similarProducts = singleProductInfo ? singleProductInfo.similarProducts : [];
  //console.log(singleProductInfo)

    return (
        <Fragment>
            <section className="section-maker">
                <div className="container">
                  <div className="sec-maker-header text-center">
                    <h3 className="sec-maker-h3">Similar Products</h3>
                  </div>
                  <div className="slider-foucxx">
                     <OwlCarouselComponents Products={similarProducts} />
                  </div>
                </div>
              </section>
        </Fragment>
    )
}

export default SimilarProducts
