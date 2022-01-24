import React from 'react';

const Rating = () => {
    return (
        <div className="product-rating">
            <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                <span style={{width: '67px'}}/>
            </div>
            <span>(23)</span>
        </div>
    );
};

export default Rating;
