import React,{Fragment} from 'react'

function NotFound() {
    return (
        <Fragment>
            <div className="page-shop u-s-p-t-80">
                <div className="container">
                {/* Result-Wrapper */}
                <div className="result-wrapper u-s-p-y-80">
                    <ul className="bread-crumb">
                    <li className="has-separator">
                        <a href="home.html">Home</a>
                    </li>
                    <li className="is-marked">
                        <a href="store-directory.html">All Categories</a>
                    </li>
                    </ul>
                    <h4>Your search, did not match any products. A partial match of your keywords is listed below.</h4>
                    <h4>Related searches:
                    <a href="shop-v1-root-category.html">men's clothing</a> ,
                    <a href="shop-v1-root-category.html">mobiles &amp; tablets</a> ,
                    <a href="shop-v1-root-category.html">books &amp; audible</a>
                    </h4>
                    <h1>SORRY</h1>
                    <form>
                    <label className="sr-only" htmlFor="search-not-found">Enter Keywords</label>
                    <input type="text" className="text-field" id="search-not-found" placeholder="Search Products..." />
                    <button className="button">Search</button>
                    </form>
                </div>
                {/* Result-Wrapper /- */}
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound
