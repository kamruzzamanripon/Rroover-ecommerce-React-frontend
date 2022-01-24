import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import UserHandyNavMenu from "./UserHandyNavMenu";
import LanguageSelect from "./LanguageSelect";

function TopHeader() {

    return (
        <Fragment>
           <div className="full-layer-outer-header">
            <div className="container clearfix">
              <nav>
                <ul className="primary-nav g-nav">
                  <li>
                    <a href="tel:+111444989">
                      <i className="fas fa-phone u-c-brand u-s-m-r-9" />
                      Telephone:+111-444-989</a>
                  </li>
                  <li>
                    <a href="mailto:contact@domain.com">
                      <i className="fas fa-envelope u-c-brand u-s-m-r-9" />
                      E-mail: contact@domain.com
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>

                <ul className="secondary-nav g-nav">

                  <UserHandyNavMenu />

                  <LanguageSelect />

                </ul>
              </nav>
            </div>
          </div>
        </Fragment>
    )
}

export default TopHeader
