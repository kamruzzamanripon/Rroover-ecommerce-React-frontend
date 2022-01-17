import React,{Fragment} from 'react'

function SitePriorities() {
    return (
        <Fragment>
             <section className="app-priority">
          <div className="container">
            <div className="priority-wrapper u-s-p-b-80">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-star" />
                    </div>
                    <h2>
                      Great Value
                    </h2>
                    <p>We offer competitive prices on our 100 million plus product range</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-cash" />
                    </div>
                    <h2>
                      Shop with Confidence
                    </h2>
                    <p>Our Protection covers your purchase from click to delivery</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-ios-card" />
                    </div>
                    <h2>
                      Safe Payment
                    </h2>
                    <p>Pay with the world’s most popular and secure payment methods</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-contacts" />
                    </div>
                    <h2>
                      24/7 Help Center
                    </h2>
                    <p>Round-the-clock assistance for a smooth shopping experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Fragment>
    )
}

export default SitePriorities
