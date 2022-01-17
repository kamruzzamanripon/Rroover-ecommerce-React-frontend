import React,{Fragment} from 'react'

function BottomFooter() {
    return (
        <Fragment>
            <div className="bottom-footer-wrapper">
              <div className="social-media-wrapper">
                <ul className="social-media-list">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <p className="copyright-text">Copyright © 2021
                <a href="home.html">Rroover</a> All Right Reserved</p>
            </div>
        </Fragment>
    )
}

export default BottomFooter
