import React,{useContext, useState,useEffect} from 'react';
import ApiUrl from '../api/ApiUrl';

const SingleProductContext = React.createContext();

export function useSingleProduct() {
     return useContext(SingleProductContext);
};

export default  function SingleProductContextProvider ({children, productID}) {

    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [singleProduct, setSingleProduct] = useState();
    //console.log(productID)

    useEffect(async (productId)=>{
        //console.log(productId)
        try{
            setLoading(true);
            setErrors()
            const {data:{data}} = await api.getTwoSlug('single-product', productID);
            //console.log(data)
            setSingleProduct(data);
            setLoading(false);
        }catch (e) {
            setErrors(e);
        }
    },[])

    return (
        !loading ? (
            <SingleProductContext.Provider value={singleProduct}>
                {children}
            </SingleProductContext.Provider>
        ) : "Loading..."
    );
};


