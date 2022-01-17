import React from 'react';

const HotSymbolElement = ({hot}) => {
    return (
        hot ? (
                <div className="tag new">
                    <span>NEW</span>
                </div>
            ) : ''
    );
};

export default HotSymbolElement;
