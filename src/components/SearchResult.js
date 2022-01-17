import React,{Fragment} from 'react'
import RightComponent from './categorySubcateroryComponents/RightComponent'
import Pagination from './categorySubcateroryComponents/Pagination'
import SearchLeftComponents from './categorySubcateroryComponents/SearchLeftComponents'

function SearchResult() {
    return (
        <Fragment>
            <div className="page-shop u-s-p-t-80">
                <div className="container">

                {/* Search-Results */}
                <div className="search-results-wrapper u-s-p-b-80">
                    <h4>WE FOUND 18 RESULTS FOR
                    <i>“CLOTHING”</i>
                    </h4>
                    <h4>Related searches:
                    <a href="shop-v1-root-category.html">men's clothing</a> ,
                    <a href="shop-v1-root-category.html">mobiles &amp; tablets</a> ,
                    <a href="shop-v1-root-category.html">books &amp; audible</a>
                    </h4>
                </div>
                {/* Search-Results /- */}

                <div className="row">
                    {/* Shop-Left-Side-Bar-Wrapper */}
                    <SearchLeftComponents/>
                    {/* Shop-Left-Side-Bar-Wrapper /- */}

                    {/* Shop-Right-Wrapper */}
                    <RightComponent/>
                    {/* Shop-Right-Wrapper /- */}

                    {/* Shop-Pagination */}
                    <Pagination/>
                    {/* Shop-Pagination /- */}

                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SearchResult
