import React from 'react';
import DeleteAction from "./DeleteAction";
import AddToCartAction from "./AddToCartAction";

const TdAction = ({productId, setDataFetch, price}) => {
    return (
        <td>
            <div className="action-wrapper">
                <AddToCartAction productId={productId}  price={price} setDataFetch={setDataFetch}/>
                <DeleteAction productId={productId} setDataFetch={setDataFetch}/>
            </div>
        </td>
    );
};

export default TdAction;
