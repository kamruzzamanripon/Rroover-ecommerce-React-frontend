import React, {Fragment, useEffect, useState, useCallback} from 'react';
import {Link} from 'react-router-dom';
import ApiUrl from "../../../api/ApiUrl";
import SubMenuLiItem from "./SubMenuLiItem";

function BottomHeader(props) {

    const api = new ApiUrl();
    const [navDisplay, SetNavDisplay] = useState(false);
    const [categoryData, setCategoryData]  = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const AllCategoryMenu = ()=>{
         navDisplay ? SetNavDisplay(false) : SetNavDisplay(true)
    }

    useEffect( ()=>{
        props.allCategoryMenu === 'true' ? SetNavDisplay(true) : SetNavDisplay(false)
    },[props.allCategoryMenu])

    useEffect( async ()=>{
        try{
          setLoading(true);
          setErrors({});

          const {data:{data}} = await api.getSingleSlug('category-list');

          setCategoryData({data});
          setLoading(false);
          //console.log(data)
        }catch (e) {
          console.log(e);
          setErrors({e});
        }
    },[]);

    const menuNavLi = categoryData.data ? (categoryData.data.map((category, index)=>{
          return(
              <li className="js-backdrop" key={index}>
                  <Link to={`/category/${category.id}`}>
                  {/*<i className="ion ion-md-shirt" />*/}
                  {category.name}
                  <i className="ion ion-ios-arrow-forward" />
                </Link>
                <button className="v-button ion ion-md-add" />
                <div className="v-drop-right" >
                  <div className="row">
                    <div className="col">
                      <ul className="v-level-2">

                        {category.subcategory.map((subCategory, index)=>{
                            return <SubMenuLiItem key={index} categoryId={category.id} subCategory={subCategory} />
                        })}

                      </ul>
                    </div>

                  </div>

                </div>
              </li>
          )
        }))
        :"";

  //console.log("BottomHeader Component")
    return (
        <Fragment>
            <div className="full-layer-bottom-header">
            <div className="container">
              <div className="row align-items-center ">

                <div className="col-lg-3">
                  <div className="v-menu">
                    <span className="v-title" onClick={AllCategoryMenu}>
                      <i className="ion ion-md-menu" />
                      All Categories
                      <i className={navDisplay ? "fas fa-angle-down" : "fas fa-angle-up"} />
                    </span>

                    {menuNavLi? (
                        <nav style={navDisplay ? {display:"block"} : {display:"none"}}>
                          <div className="v-wrapper">
                            <ul className="v-list animated fadeIn">
                              {menuNavLi}
                            </ul>
                          </div>
                        </nav>
                    )
                    :
                      "Data Loading..."
                    }
                  </div>
                </div>


                <div className="col-lg-9">
                  <ul className="bottom-nav g-nav u-d-none-lg">
                    <li>
                      <Link to="/new-arrivals">New Arrivals
                        <span className="superscript-label-new">NEW</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/exclusive-deals">Exclusive Deals
                        <span className="superscript-label-hot">HOT</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/flash-deals">Flash Deals
                      </Link>
                    </li>

                    <li>
                      <Link to="/super-sale">Super Sale
                        <span className="superscript-label-discount">-15%</span>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default BottomHeader
