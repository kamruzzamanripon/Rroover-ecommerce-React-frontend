import React from 'react';
import useWishProductDeleteHook from "../../context/wishListPage/WishProductDeleteHook";

const DeleteAction = ({productId, setDataFetch}) => {

    const {wishProductDelete} = useWishProductDeleteHook();

    const wishProductDeleteHandle = () => {
        wishProductDelete(productId);
        setDataFetch(true)
    };

    //console.log("wishlist Delete page", wishListData)
    return (
        <button className="button button-outline-secondary fas fa-trash" onClick={wishProductDeleteHandle}/>
    );
};

export default DeleteAction;
