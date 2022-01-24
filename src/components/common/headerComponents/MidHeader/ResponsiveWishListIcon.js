import React from 'react';
import {Link} from "react-router-dom";

const ResponsiveWishListIcon = () => {
    return (
        <div className="fixed-responsive-wrapper">
            <Link to="authentication/wishlist">
                <i className="far fa-heart" />
                <span className="fixed-item-counter">14</span>
            </Link>
        </div>
    );
};

export default ResponsiveWishListIcon;
