import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import CollapseTabItem from "../collapseTabComponents/CollapseTabItem";
import CollapseTigerItem from "../collapseTabComponents/CollapseTigerItem";
import ApiUrl from "../../api/ApiUrl";

function BooksAudible() {
  const api = new ApiUrl();
  const [menProduts, setmenProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

  const latestProduct = async () => {
    try {
      setmenProducts();
      setLoading(true);
      setErrors({});
      const {data} = await api.getTwoSlug('beauty-health', 'latest_product');

      const bData = data.data;
      //console.log(dData)
      setmenProducts(bData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrors(e)
    }
  };
  const bestSellingProduts = async () => {
    try {
      setmenProducts();
      setLoading(true);
      setErrors({});
      const {data} = await api.getTwoSlug('beauty-health', 'best_selling');

      const bData = data.data;
      //console.log(dData)
      setmenProducts(bData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrors({e})
    }
  };
  const topRatingProduts = async () => {
    try {
      setmenProducts();
      setLoading(true);
      setErrors({});
      const {data} = await api.getTwoSlug('beauty-health', 'top_rating');

      const bData = data.data;
      //console.log(dData)
      setmenProducts(bData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrors({e})
    }
  };
  const featureProduts = async () => {
    try {
      setmenProducts();
      setLoading(true);
      setErrors({});
      const {data} = await api.getTwoSlug('beauty-health', 'featured');

      const bData = data.data;
      //console.log(dData)
      setmenProducts(bData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrors({e})
    }
  };

  useEffect(() => {
    latestProduct()
  }, []);

  //console.log(loading)
    return (
        <Fragment>
          <section className="section-maker">
            <div className="container">
              <div className="sec-maker-header text-center">
                <h3 className="sec-maker-h3">Books &amp; Audible</h3>
                <ul className="nav tab-nav-style-1-a justify-content-center">
                  <CollapseTigerItem className="nav-link active" href="#men-latest-products"
                                     onClick={latestProduct} title="Latest
                                    Products"/>
                  <CollapseTigerItem className="nav-link" href="#men-best-selling-products"
                                     onClick={bestSellingProduts} title="Best
                                    Selling"/>
                  <CollapseTigerItem className="nav-link" href="#men-top-rating-products"
                                     onClick={topRatingProduts} title="Top Rating"/>
                  <CollapseTigerItem className="nav-link" href="#men-featured-products"
                                     onClick={featureProduts} title="Featured
                                    Products"/>
                </ul>
              </div>
              <div className="wrapper-content">
                <div className="outer-area-tab">
                  <div className="tab-content">
                    {!loading ?
                        <CollapseTabItem className="tab-pane active show fade" id="men-latest-products"
                                         Products={menProduts}/> : "Loading..."}

                    {!loading ? <CollapseTabItem className="tab-pane fade" id="men-best-selling-products"
                                                 Products={menProduts}/> : "Loading..."}

                    {!loading ? <CollapseTabItem className="tab-pane fade" id="men-top-rating-products"
                                                 Products={menProduts}/> : "Loading..."}

                    {!loading ? <CollapseTabItem className="tab-pane fade" id="men-featured-products"
                                                 Products={menProduts}/> : "Loading..."}
                  </div>
                </div>
              </div>
              <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                <Link className="redirect-link" to="store-directory.html">
                  <span>View more on this category</span>
                </Link>
              </div>
            </div>
          </section>
        </Fragment>
    )
}

export default BooksAudible
