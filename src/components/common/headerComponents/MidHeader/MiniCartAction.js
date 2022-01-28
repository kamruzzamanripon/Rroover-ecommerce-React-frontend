import React,{Fragment,useState, useEffect} from 'react';
import {CartState} from "../../../../context/cart/CartContext";

const MiniCartAction = ({ProductId, cartItem}) => {
    const [numberCount, setNumberCount] = useState(cartItem?.quantity);
     const {cartItemDeleteFetch} = CartState();
    const {cartItemQuentiyUpdate} = CartState();


    const increaseProductQuantity = (e) => {
        e.preventDefault();
        setNumberCount(numberCount <= 100 ? Number(numberCount) + Number(1) : 1);
        cartItemQuentiyUpdate(ProductId, numberCount)
    };

    const decreaseProductQuantity = (e) => {
        e.preventDefault();
        setNumberCount(numberCount > 0 ? Number(numberCount) - Number(1) : 1);
        cartItemQuentiyUpdate(ProductId, numberCount)
    };

    useEffect(() => {
        //cartItemQuentiyUpdate(ProductId, numberCount)
    }, []);


    const deleteCartItem = (e)=>{
        e.preventDefault();
        cartItemDeleteFetch(ProductId, cartItem);
    }

    return (
        <Fragment>
            <span><button style={{fontSize: '5px', marginRight:'3px', marginLeft:"3px"}} className="button button-outline-secondary fas fa-minus" onClick={(e) => decreaseProductQuantity(e)} /></span>
            <span><button style={{fontSize: '5px', marginRight:'3px'}} className="button button-outline-secondary fas fa-plus" onClick={(e) => increaseProductQuantity(e)} /></span>
            <span><button style={{fontSize: '7px'}} className="button button-outline-secondary fas fa-trash" onClick={(e)=>deleteCartItem(e)}/></span>
        </Fragment>
    );
};

export default MiniCartAction;
