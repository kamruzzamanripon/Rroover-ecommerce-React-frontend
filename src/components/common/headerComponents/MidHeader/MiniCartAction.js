import React,{Fragment,useState} from 'react';
import useCartItemsContextHook from "../../../../context/CartPage/CartItemsContextHook";

const MiniCartAction = ({ProductId}) => {
    const [dataFetch, setDataFetch] = useState(false)

    const {cartItemDeleteFetch, cartItemQuentiyUpdate, cartItemsDataFetch} = useCartItemsContextHook();

    const deleteCartItem = (e)=>{
        e.preventDefault();
        cartItemDeleteFetch(ProductId);
        cartItemsDataFetch()
        //setDataFetch(true);
    }

    return (
        <Fragment>
            <span><button style={{fontSize: '5px', marginRight:'3px', marginLeft:"3px"}} className="button button-outline-secondary fas fa-minus"/></span>
            <span><button style={{fontSize: '5px', marginRight:'3px'}} className="button button-outline-secondary fas fa-plus"/></span>
            <span><button style={{fontSize: '7px'}} className="button button-outline-secondary fas fa-trash" onClick={(e)=>deleteCartItem(e)}/></span>
        </Fragment>
    );
};

export default MiniCartAction;
