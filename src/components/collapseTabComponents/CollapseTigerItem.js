import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


function CollapseTigerItem({className, href, onClick, title}) {

    return (
        <Fragment>
            <li className="nav-item">
                <Link className={className} data-toggle="tab" to={href}
                   onClick={onClick}>{title}</Link>
            </li>
        </Fragment>
    )
}

export default CollapseTigerItem
