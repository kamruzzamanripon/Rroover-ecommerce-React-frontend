import React,{Fragment} from 'react'
import RightComponent from './categorySubcateroryComponents/RightComponent'

function CustomDeal(props) {
    return (
        <Fragment>
            <div className="page-deal u-s-p-t-80">
                <div className="container">
                
                <div className="deal-page-wrapper">
                    <h1 className="deal-heading">{props.title}</h1>
                    <h6 className="deal-has-total-items">{props.item}</h6>
                </div>

                <RightComponent
                    col="12"
                />
                </div>
            </div>
        </Fragment>
    )
}

export default CustomDeal
