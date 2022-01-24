import React, {useState} from 'react';
import SocialShareInformation from "./SocialShareInformation";
import useAddWishListEventHook from "../../../../utilityHook/addWishListEventHook";

const AddToCartForm = ({productId}) => {
    const [numberCount, setNumberCount] = useState(1);
    const {addWishListEvent} = useAddWishListEventHook(productId)

    const addWishList = (e)=>{
        e.preventDefault()
        addWishListEvent()
    }
    //console.log(productId)
    return (
        <div className="section-6-social-media-quantity-actions u-s-p-y-14">
            <form action="#" className="post-form">

                <SocialShareInformation/>

                <div className="quantity-wrapper u-s-m-b-22">
                    <span>Quantity:</span>
                    <div className="quantity">
                        <input type="text" className="quantity-text-field" value={numberCount}/>
                        <a className="plus-a"
                           onClick={() => setNumberCount(numberCount <= 100 ? numberCount + 1 : 1)}>+</a>
                        <a className="minus-a"
                           onClick={() => setNumberCount(numberCount > 0 ? numberCount - 1 : 1)}>-</a>
                    </div>
                </div>

                <div>
                    <button className="button button-outline-secondary" type="submit">Add to cart</button>
                    <button className="button button-outline-secondary far fa-heart u-s-m-l-6" onClick={(e) => addWishList(e)} />
                    <button className="button button-outline-secondary far fa-envelope u-s-m-l-6"/>
                </div>
            </form>
        </div>
    );
};

export default AddToCartForm;
