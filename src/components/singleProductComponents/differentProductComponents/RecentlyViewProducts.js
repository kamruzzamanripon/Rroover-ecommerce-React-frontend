import React,{Fragment} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function RecentlyViewProducts() {
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

    return (
        <Fragment>
            <section className="section-maker">
                <div className="container">
                  <div className="sec-maker-header text-center">
                    <h3 className="sec-maker-h3">Recently View</h3>
                  </div>
                  <div className="slider-foucxx">
                    <OwlCarousel 
                      className='owl-theme products-slider'
                      {...optionsMenProduct}
                    >
                      <div className="item">
                        <div className="image-container">
                          <a className="item-img-wrapper-link" href="single-product.html">
                            <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                          </a>
                          <div className="item-action-behaviors">
                            <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                            <a className="item-mail" href="javascript:void(0)">Mail</a>
                            <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                            <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                          </div>
                        </div>
                        <div className="item-content">
                          <div className="what-product-is">
                            <ul className="bread-crumb">
                              <li className="has-separator">
                                <a href="shop-v1-root-category.html">Men's</a>
                              </li>
                              <li className="has-separator">
                                <a href="shop-v2-sub-category.html">Outwear</a>
                              </li>
                              <li>
                                <a href="shop-v3-sub-sub-category.html">Jackets</a>
                              </li>
                            </ul>
                            <h6 className="item-title">
                              <a href="single-product.html">Maire Battlefield Jeep Men's Jacket</a>
                            </h6>
                            <div className="item-stars">
                              <div className="star" title="0 out of 5 - based on 0 Reviews">
                                <span style={{width: 0}} />
                              </div>
                              <span>(0)</span>
                            </div>
                          </div>
                          <div className="price-template">
                            <div className="item-new-price">
                              $55.00
                            </div>
                            <div className="item-old-price">
                              $60.00
                            </div>
                          </div>
                        </div>
                        <div className="tag hot">
                          <span>HOT</span>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </section>
        </Fragment>
    )
}

export default RecentlyViewProducts
