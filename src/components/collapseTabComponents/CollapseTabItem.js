import React, {Fragment} from 'react';
import OwlCarouselComponents from "../owlComponents/owlCarouselComponents";


function CollapseTabItem({className, id, Products}) {

    return (
        <Fragment>
            <div className={className} id={id}>
                <div className="slider-foucxx">

                    <OwlCarouselComponents Products={Products ? Products : ""}/>

                </div>
            </div>
        </Fragment>
    )
}

export default CollapseTabItem
