import React from 'react';

const SocialShareInformation = () => {
    return (
        <div className="quick-social-media-wrapper u-s-m-b-22">
            <span>Share:</span>
            <ul className="social-media-list">
                <li>
                    <a href="#">
                        <i className="fab fa-facebook-f"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-twitter"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-google-plus-g"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-rss"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-pinterest"/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialShareInformation;
