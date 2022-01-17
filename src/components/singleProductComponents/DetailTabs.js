import React,{Fragment} from 'react'
import DescriptionTab from './detailTabComponents/DescriptionTab'
import ReviewsTab from './detailTabComponents/ReviewsTab'
import SpecificationsTab from './detailTabComponents/SpecificationsTab'


function DetailTabs() {

    return (
        <Fragment>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="detail-tabs-wrapper u-s-p-t-80">
                  <div className="detail-nav-wrapper u-s-m-b-30">
                    <ul className="nav single-product-nav justify-content-center">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#description">Description</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#review">Reviews (15)</a>
                      </li>
                    </ul>
                  </div>

                  <div className="tab-content">

                    {/* Description-Tab */}
                    <DescriptionTab/>
                    {/* Description-Tab /- */}

                    {/* Reviews-Tab */}
                    <ReviewsTab/>
                    {/* Reviews-Tab /- */}
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default DetailTabs
