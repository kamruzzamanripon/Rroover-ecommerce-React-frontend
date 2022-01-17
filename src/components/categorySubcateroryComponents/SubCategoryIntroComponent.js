import React,{Fragment} from 'react'

function SubCategoryIntroComponent() {
    return (
        <Fragment>
            <div className="shop-intro">
                    <ul className="bread-crumb">
                    <li className="has-separator">
                        <a href="home.html">Home</a>
                    </li>
                    <li className="has-separator">
                        <a href="shop-v1-root-category.html">Men's Clothing</a>
                    </li>
                    <li className="is-marked">
                        <a href="shop-v3-sub-sub-category.html">Tops</a>
                    </li>
                    </ul>
                </div>
        </Fragment>
    )
}

export default SubCategoryIntroComponent
