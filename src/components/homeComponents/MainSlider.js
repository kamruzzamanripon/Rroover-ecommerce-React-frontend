import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import useMainSliderContext from '../../context/homepage/sectionFetchContext/MainSliderContextHook';


function MainSlider() {
  const options = {
    items: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: false,
    dots: false,
    rewind: true, // Go backwards when the boundary has reached
    nav: true, // Show next/prev buttons
    //   navContainerClass: 'owl-nav' by default,
    navElement: "div",
    navClass: ["main-slider-previous", "main-slider-next"], // Add these classes on navElement
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
  };

  const {bannerData, loading, errors} = useMainSliderContext();

  //console.log("base url", process.env.REACT_APP_ImagebaseUrl)

  const owlData =  bannerData.bData ? (bannerData.bData.map((banner, index)=>{
    return(
        <div className="bg-image" key={index}>
            <img className="img-fluid" src={banner ? (process.env.REACT_APP_ImagebaseUrl +banner.image) : 'https://via.placeholder.com/1500'}
               alt="Winter Season Banner"/>
          <div className={`slide-content${(index % 2 == 0) ? "-2" : ""} slide-animation`}>
            <h1 className={`${(index % 2 == 0) ? "slide-2-h2-a" : ""}`}>{banner ? banner.title : ''}</h1>
            <h2 className={`${(index % 2 == 0) ? "slide-2-h2-a" : ""}`}>{banner.sub_title}</h2>
          </div>
        </div>
    )
  })) : "";

  //console.log("MainSlider Component")
  return (
    <Fragment>
      {!errors ? (<h1>Has some error</h1>) :
          (<div className="default-height ph-item">
            <OwlCarousel className="owl-theme slider-main" {...options}>
              { owlData ? owlData
              : 'No Data Found'}
           </OwlCarousel>
          </div>
          )}
    </Fragment>
  );
}

export default MainSlider;
