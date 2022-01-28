import React, {useState, Fragment, useEffect} from 'react';
import MiniCart from "../MiniCart";
import {cartTotal, ProductCount} from "../../../../utilityHook/cartCountInfoHook";
import {CartState} from "../../../../context/cart/CartContext";
//import {userAuth} from '../../../../utilityHook/userAuthHook';
import Cookie from "js-cookie";


const MiniCartTrigger = () => {
    const [miniCartTigger, setMiniCartTigger] = useState(false);
    const [authExits, setAuthExits] = useState(false)

    const miniCartTiggerToggle =()=>{
        miniCartTigger === false ? setMiniCartTigger(true) : setMiniCartTigger(false);
    };

    const {state: { cart }} = CartState();

    useEffect(()=>{
        const userAuth = Cookie.get('user_auth');
       setAuthExits(userAuth && userAuth.length > 0 ? true : false)
    })

    //console.log("mincart", userAuth && userAuth)
    //console.log("mincart authExits", authExits)
    return (

        authExits ? (
                 <Fragment>
                     <li>
                         <a id="mini-cart-trigger" onClick={miniCartTiggerToggle}>
                             <i className="ion ion-md-basket" />
                             <span className="item-counter">{ ProductCount(cart) }</span>
                             <span className="item-price">${ cartTotal(cart) }</span>
                         </a>
                     </li>

                     {/* Mini Cart */}
                     <MiniCart
                         cartItemsData={cart}
                         miniCartTigger={miniCartTigger}
                         miniCartTiggerToggle={miniCartTiggerToggle}
                     />
                     {/* Mini Cart /- */}
                 </Fragment>
             ) :
                <Fragment>
                    <li>
                        <a id="mini-cart-trigger" >
                            <i className="ion ion-md-basket" />
                            <span className="item-counter">0</span>
                            <span className="item-price">$</span>
                        </a>
                    </li>
                    <MiniCart />
                </Fragment>



    );
};

export default MiniCartTrigger;
