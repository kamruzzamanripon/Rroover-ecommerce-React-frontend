import React,{useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const useWishListContextHook = (productid) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const [wishListData, setWishListData] = useState('');


    const wishListDataFetch = async ()=>{
        const api = new ApiUrl();


        try{
            setLoading(true);
            setErrors()
            setWishListData('');

            const {data:{data}} = await api.authGetSlug("all-wishlist");

            if(data.length !== wishListData.length){
                setWishListData( data);
            }else{
                setWishListData(data)
            }
           // setWishListData(data)

            setLoading(false);
            //console.log("WishList all Context", data);
            //console.log("WishList wishListData Context", wishListData);

        }catch (e) {
            setErrors(e.response && e.response.data.message);
            //console.log("WishList Context errors data", e.response.data.message )
        }
    }


    return {
        loading,
        errors,
        wishListData,
        wishListDataFetch
    };
};

export default useWishListContextHook;
