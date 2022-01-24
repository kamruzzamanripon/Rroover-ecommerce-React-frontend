import React from 'react';
import {Link} from "react-router-dom";

const BrandLogo = () => {
    return (
        <div className="brand-logo text-lg-center">
            <Link to="/">
                <img src="72.png" alt="Groover Brand Logo" className="app-brand-logo"/>
            </Link>
        </div>
    );
};

export default BrandLogo;
