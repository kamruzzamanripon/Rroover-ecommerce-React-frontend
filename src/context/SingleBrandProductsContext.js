import React,{useState, useEffect, useContext} from 'react';
import ApiUrl from '../api/ApiUrl';

const brandProductContext = React.createContext();

export const useSingleBrandProducts = ()=>{
    return useContext(brandProductContext);
}

const SingleBrandProductsContext = ({children,brandId}) => {

    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [brandProduct, setBrandProduct] = useState();

    useEffect(async ()=>{
        //console.log(productId)
        try{
            setLoading(true);
            setErrors()
            const {data:{data}} = await api.getTwoSlug('single-brand', brandId);
            //console.log("Brand Product", data)
            setBrandProduct(data);
            setLoading(false);
        }catch (e) {
            setErrors(e);
        }
    },[brandId])

    return (
        !loading ? (
            <brandProductContext.Provider value={brandProduct}>
                {children}
            </brandProductContext.Provider>
        ) : "Data Loading"
    );
};

export default SingleBrandProductsContext;
