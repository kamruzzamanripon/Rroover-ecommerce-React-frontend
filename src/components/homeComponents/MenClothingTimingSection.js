import React, {Fragment, useEffect, useState} from 'react'
import OwlCarouselComponents from "../owlComponents/owlCarouselComponents";
import ApiUrl from "../../api/ApiUrl";
import CollapseTabItem from "../collapseTabComponents/CollapseTabItem";

function MenClothingTimingSection() {

  const api = new ApiUrl();
  const [menHotDealProduts, setMenHotDealProduts] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

    useEffect(async ()=>{
      try {
        setMenHotDealProduts();
        setLoading(true);
        setErrors();
        const {data} = await api.getSingleSlug('mens-hotdeals');

        const bData = data.data;
        //console.log(bData)
          setMenHotDealProduts(bData);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setErrors(e)
      }
    },[1]);
 //console.log(menHotDealProduts)
    return (
        <Fragment>

            <section className="section-maker">
                <div className="container">

                  <div className="sec-maker-header text-center">
                        <span className="sec-maker-span-text">Men's Clothing</span>
                        <h3 className="sec-maker-h3 u-s-m-b-22">Hot Deals</h3>

                    </div>

                    {/* Carousel */}
                    <div className="slider-foucxx">
                     {!loading ? <OwlCarouselComponents Products={menHotDealProduts}/> : "Loading..."}
                    </div>
                    {/* Carousel /- */}
                </div>
            </section>
        </Fragment>
    )
}

export default MenClothingTimingSection
