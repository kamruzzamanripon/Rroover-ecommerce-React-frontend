import React, {useState, Fragment} from 'react';
import MiniCart from "../MiniCart";
import {cartTotal, ProductCount} from "../../../../utilityHook/cartCountInfoHook"
import useCartItemsContextHook from "../../../../context/CartPage/CartItemsContextHook";


const MiniCartTrigger = () => {
    const [miniCartTigger, setMiniCartTigger] = useState(false);

    const miniCartTiggerToggle =()=>{
        miniCartTigger === false ? setMiniCartTigger(true) : setMiniCartTigger(false);
    };
    const {LocalStoreCart} = useCartItemsContextHook();


    //console.log("mincart", LocalStoreCart())
    return (
        <Fragment>
            <li>
                <a id="mini-cart-trigger" onClick={miniCartTiggerToggle}>
                    <i className="ion ion-md-basket" />
                    <span className="item-counter">{ ProductCount(LocalStoreCart()) }</span>
                    <span className="item-price">${ cartTotal(LocalStoreCart()) }</span>
                </a>
            </li>

            {/* Mini Cart */}
            <MiniCart
                cartItemsData={LocalStoreCart()}
                miniCartTigger={miniCartTigger}
                miniCartTiggerToggle={miniCartTiggerToggle}
            />
            {/* Mini Cart /- */}
        </Fragment>
    );
};

export default MiniCartTrigger;
