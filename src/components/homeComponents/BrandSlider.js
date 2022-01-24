import React,{Fragment, useState, useEffect} from 'react';
import OwlSmallFiveSlide from "../owlComponents/owlSmallFiveSlide";
import ApiUrl from "../../api/ApiUrl";
import useBrandSliderContextHook from "../../context/homepage/sectionFetchContext/BrandSliderContextHook";

function BrandSlider() {

    const {brandList, loading, errors} = useBrandSliderContextHook();
    //console.log(brandList)
      return (
        <Fragment>
            <div className="brand-slider u-s-p-b-80">
          <div className="container">
              {!loading ? <OwlSmallFiveSlide listItems={brandList} /> : "Loading..."}
          </div>
        </div>
        </Fragment>
    )
}

export default BrandSlider
