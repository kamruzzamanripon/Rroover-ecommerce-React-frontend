import React,{Fragment} from 'react'
import ProductDetails from './productDetailComponents/ProductDetails'
import ProductZoomArea from './productDetailComponents/ProductZoomArea'

function ProductDetail() {
    return (
        <Fragment>
            <div className="row">
              
              <div className="col-lg-6 col-md-6 col-sm-12">
                {/* Product-zoom-area */}
                <ProductZoomArea/>
                {/* Product-zoom-area /- */}
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                {/* Product-details */}
                <ProductDetails/>
                {/* Product-details /- */}
              </div>

            </div>
        </Fragment>
    )
}

export default ProductDetail
