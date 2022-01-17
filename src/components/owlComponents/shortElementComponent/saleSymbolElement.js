import React from 'react';

const SaleSymbolElement = ({sale}) => {
    return (
        sale ? (
            <div className="tag sale">
                <span>SALE</span>
            </div>
        ) : ''
    );
};

export default SaleSymbolElement;
