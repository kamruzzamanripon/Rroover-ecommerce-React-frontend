import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

function subMenuLiItem({subCategory,categoryId}) {
    //console.log("subCategory")
    //console.log("categoryId", categoryId)
    return (
        <Fragment>
            <li>
                <Link to={`/${categoryId}/${subCategory.id}`}>{subCategory.name}</Link>
            </li>
        </Fragment>
    )
}

export default subMenuLiItem
