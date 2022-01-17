import React,{Fragment} from 'react'

function ContinueLink() {
    return (
        <Fragment>
            <div className="continue-link-wrapper u-s-p-b-80">
            <a className="continue-link" href="store-directory.html" title="View all products on site">
                <i className="ion ion-ios-more" />
            </a>
            </div>
        </Fragment>
    )
}

export default ContinueLink
