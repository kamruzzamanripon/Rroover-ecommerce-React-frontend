import React,{Fragment, useState, useEffect} from 'react';
import OwlSmallFiveSlide from "../owlComponents/owlSmallFiveSlide";
import ApiUrl from "../../api/ApiUrl";

function BrandSlider() {
    const api = new ApiUrl();
    const [brandList, setBrandList] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    useEffect(async ()=>{
        try{
            setLoading(true);
            setErrors();
            const {data:{data}} = await api.getSingleSlug("brand-list");
            //console.log(data)
            setBrandList(data);
            setLoading(false);
        }catch (e) {
            console.log(e);
            setErrors(e);
        }
    },[])
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
