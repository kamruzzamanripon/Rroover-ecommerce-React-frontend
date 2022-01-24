import React,{useState, useEffect} from 'react';
import useCartItemsContextHook from "../../context/CartPage/CartItemsContextHook";

const TrComponent = ({cartItem, setDataFetch}) => {
    const [numberCount, setNumberCount] = useState(cartItem?.quantity);
    const [productId, setProductId] = useState(cartItem?.product?.id);
    const [productInfo, setProductInfo] = useState({});
    const productImage = cartItem ? JSON.parse(cartItem.product.image) : '';

    const {cartItemDeleteFetch, cartItemQuentiyUpdate} = useCartItemsContextHook()

    const deleteCartItem = (e)=>{
        e.preventDefault();
        cartItemDeleteFetch(productId);
        setDataFetch(true);
    }

   const increaseProductQuantity = (e)=>{
        e.preventDefault();
        setNumberCount(numberCount <= 100 ? Number(numberCount) + Number(1) : 1);
    }

    const decreaseProductQuantity = (e)=>{
        e.preventDefault();
        setNumberCount(numberCount > 0 ? Number(numberCount) - Number(1) : 1);
    }

    useEffect(()=>{
        cartItemQuentiyUpdate(productId, numberCount)
    },[numberCount])

    return (
        <tr>
            <td>
                <div className="cart-anchor-image">
                    <a href="single-product.html">
                        <img src={productImage[0]} alt="Product" />
                        <h6>{cartItem?.product?.name}</h6>
                    </a>
                </div>
            </td>
            <td>
                <div className="cart-price">
                    ${cartItem.actual_price}
                </div>
            </td>
            <td>
                <div className="cart-quantity">
                    <div className="quantity">
                        <input type="text" className="quantity-text-field" value={numberCount} />
                        {/*<a className="plus-a" onClick={(() => setNumberCount(numberCount <= 100 ? Number(numberCount) + Number(1) : 1 ))} >+</a>*/}
                        <a className="plus-a" onClick={(e)=>increaseProductQuantity(e)} >+</a>

                        <a className="minus-a" onClick={(e)=>decreaseProductQuantity(e)}>-</a>
                    </div>
                </div>
            </td>
            <td>
                <div className="action-wrapper float-right">
                    <span>{numberCount*cartItem.actual_price}</span> &nbsp;
                    <button className="button button-outline-secondary fas fa-trash" onClick={(e)=>deleteCartItem(e)}/>
                </div>
            </td>
        </tr>
    );
};

export default TrComponent;
