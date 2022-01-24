import React from 'react';

const Description = ({singleProductInfo}) => {
    return (
        <div className="section-2-short-description u-s-p-y-14">
            <h6 className="information-heading u-s-m-b-8">Description:</h6>
            <p>{singleProductInfo ? singleProductInfo.details : ""}</p>
        </div>
    );
};

export default Description;
