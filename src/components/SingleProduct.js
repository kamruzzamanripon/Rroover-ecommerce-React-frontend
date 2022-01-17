import React,{Fragment} from 'react'
import DetailTabs from './singleProductComponents/DetailTabs'
import DifferentProducts from './singleProductComponents/DifferentProducts'
import ProductDetail from './singleProductComponents/ProductDetail'


function SingleProduct() {

     return (
        <Fragment>
            <div className="page-detail u-s-p-t-80">
          <div className="container">

            {/* Product-Detail */}
            <ProductDetail/>
            {/* Product-Detail /- */}

            {/* Detail-Tabs */}
            <DetailTabs/>
            {/* Detail-Tabs /- */}

            {/* Different-Product-Section */}
            <DifferentProducts/>
            {/* Different-Product-Section /- */}

          </div>
        </div>
        </Fragment>
    )
}

export default SingleProduct
