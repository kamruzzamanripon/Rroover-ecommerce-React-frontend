import React,{Fragment} from 'react'
import {useCategoryProducts} from '../../context/SingleCategoryProductsContext'

function CategoryIntroComponent() {
    const categoryInfo = useCategoryProducts();
    return (
        <Fragment>
            <div className="shop-intro">
                <h3>{categoryInfo ? categoryInfo.name : ""}</h3>
            </div>
        </Fragment>
    )
}

export default CategoryIntroComponent
