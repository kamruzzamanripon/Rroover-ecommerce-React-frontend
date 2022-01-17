import React,{Fragment, useState} from 'react'
import ReactImageZoom from 'react-image-zoom';
import {useSingleProduct} from '../../../context/SingleProductContext';

function ProductZoomArea() {
    const singleProductInfo = useSingleProduct();
    const productImages = singleProductInfo ? JSON.parse(singleProductInfo.image) : ["Image not available"];
    const [previewImage, setPreviewImage] = useState(productImages[0])

    //console.log(productImages);


    const bigImageConvert = (event)=>{
      let imgSrc= event.target.getAttribute('src')
      setPreviewImage(imgSrc)

    }
    return (
        <Fragment>
            <div className="zoom-area">
                <ReactImageZoom
                  width= {480}
                  height= {400}
                  zoomWidth={500}
                  img={previewImage}

                />
                  {/* <img id="zoom-pro" className="img-fluid" src="images/product/product@4x.jpg"  alt="Zoom Image" /> */}

                  <div id="gallery" className="u-s-m-t-10">
                      {productImages.map((image, index)=>(
                          <a onClick={bigImageConvert} className="active"  key={index}>
                              <img src={image} alt="Product" />
                          </a>
                      ))}


                  </div>
                </div>
        </Fragment>
    )
}

export default ProductZoomArea
