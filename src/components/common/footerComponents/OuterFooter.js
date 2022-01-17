import React,{Fragment} from 'react'

function OuterFooter() {
    return (
        <Fragment>
            <div className="outer-footer-wrapper u-s-p-y-80">
              <h6>
                For special offers and other discount information
              </h6>
              <h1>
                Subscribe to our Newsletter
              </h1>
              <p>
                Subscribe to the mailing list to receive updates on promotions, new arrivals, discount and coupons.
              </p>
              <form className="newsletter-form">
                <label className="sr-only" htmlFor="newsletter-field">Enter your Email</label>
                <input type="text" id="newsletter-field" placeholder="Your Email Address" />
                <button type="submit" className="button">SUBMIT</button>
              </form>
            </div>
        </Fragment>
    )
}

export default OuterFooter
