import React from 'react';

const ImageElement = ({image}) => {
    return (
        <a className="item-img-wrapper-link" href="#">
            <img className="img-fluid" src={image} alt="Product"/>
        </a>
    );
};

export default ImageElement;
