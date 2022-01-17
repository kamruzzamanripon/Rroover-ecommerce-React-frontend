import React,{useState, useEffect} from 'react';
import ApiUrl from '../../../api/ApiUrl'

const HoverElement = ({productId}) => {
    const [productInfo, setProductInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    const addWishList = async (e)=>{
        const api = new ApiUrl();
        e.preventDefault();
        setProductInfo({
            'product_id' : productId
        });
        try{
            const data = await api.postSingleSlug("add-wishlist", productInfo)
            console.log("WishList Data", data)
            setProductInfo();
        }catch (e) {
            console.log(e);
            setErrors(e)
        }
    };

    useEffect(()=>{

    },[])

    console.log(productInfo)


    return (
        <div className="item-action-behaviors">
            <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
            </a>
            <a className="item-mail" href="#">Mail</a>
            <a className="item-addwishlist" onClick={(e)=> addWishList(e)} >Add to Wishlist</a>
            <a className="item-addCart" href="#">Add to Cart</a>
        </div>
    );
};

export default HoverElement;
