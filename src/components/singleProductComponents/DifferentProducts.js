import React,{Fragment} from 'react'
import RecentlyViewProducts from './differentProductComponents/RecentlyViewProducts'
import SimilarProducts from './differentProductComponents/SimilarProducts'

function DifferentProducts() {
    return (
        <Fragment>
            <div className="detail-different-product-section u-s-p-t-80">
              {/* Similar-Products */}
              <SimilarProducts/>
              {/* Similar-Products /- */}
              {/* Recently-View-Products  */}
              {/*<RecentlyViewProducts/>*/}
              {/* Recently-View-Products /- */}
            </div>
        </Fragment>
    )
}

export default DifferentProducts
