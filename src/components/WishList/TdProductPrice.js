import React from 'react';

const TdProductPrice = ({price}) => {
    return (
        <td>
            <div className="cart-price">
                ${price}
            </div>
        </td>
    );
};

export default TdProductPrice;
