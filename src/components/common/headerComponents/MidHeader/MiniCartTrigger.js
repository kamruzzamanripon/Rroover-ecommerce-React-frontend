import React, {useState, Fragment} from 'react';
import MiniCart from "../MiniCart";

const MiniCartTrigger = () => {
    const [miniCartTigger, setMiniCartTigger] = useState(false)
    //console.log(miniCartTigger)

    const miniCartTiggerToggle =()=>{
        miniCartTigger === false ? setMiniCartTigger(true) : setMiniCartTigger(false)
    }

    return (
        <Fragment>
            <li>
                <a id="mini-cart-trigger" onClick={miniCartTiggerToggle}>
                    <i className="ion ion-md-basket" />
                    <span className="item-counter">4</span>
                    <span className="item-price">$220.00</span>
                </a>
            </li>

            {/* Mini Cart */}
            <MiniCart
                miniCartTigger={miniCartTigger}
                miniCartTiggerToggle={miniCartTiggerToggle}
            />
            {/* Mini Cart /- */}
        </Fragment>
    );
};

export default MiniCartTrigger;
