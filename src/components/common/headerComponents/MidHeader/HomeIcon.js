import React from 'react';
import {Link} from "react-router-dom";

const HomeIcon = () => {
    return (
        <li className="u-d-none-lg">
            <Link to="/">
                <i className="ion ion-md-home u-c-brand" />
            </Link>
        </li>
    );
};

export default HomeIcon;
