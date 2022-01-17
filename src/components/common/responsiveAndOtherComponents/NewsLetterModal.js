import React,{Fragment} from 'react'

function NewsLetterModal() {
    return (
        <Fragment>
            <div id="newsletter-modal" className="modal fade">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <button type="button" className="button dismiss-button ion ion-ios-close" data-dismiss="modal" />
                <div className="modal-body u-s-p-x-0">
                    <div className="row align-items-center u-s-m-x-0">
                    <div className="col-lg-6 col-md-6 col-sm-12 u-s-p-x-0">
                        <div className="newsletter-image">
                        <a href="shop-v1-root-category.html" className="banner-hover effect-dark-opacity">
                            <img className="img-fluid" src="images/banners/newsletter-1.jpg" alt="Newsletter Image" />
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="newsletter-wrapper">
                        <h1>New to
                            <span>Groover</span> ?
                            <br />Subscribe Newsletter</h1>
                        <h5>Get latest product update...</h5>
                        <form>
                            <div className="u-s-m-b-35">
                            <input type="text" className="newsletter-textfield" placeholder="Enter Your Email" />
                            </div>
                            <div className="u-s-m-b-35">
                            <button className="button button-primary d-block w-100">Subscribe</button>
                            </div>
                        </form>
                        <h6>Be the first for getting special deals and offers, Send directly to your inbox.</h6>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default NewsLetterModal
