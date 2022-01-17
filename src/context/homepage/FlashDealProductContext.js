import React,{useContext, useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const FlashDealContext = React.createContext();

export const useFlashDealContextProducts = ()=>{
    return useContext(FlashDealContext);
}

const FlashDealProductContext = ({children}) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [flashDealProducts, setFlashDealProducts] = useState();

    useEffect(async ()=>{
        try{
            setLoading(true);
            setErrors()
            const {data:{data}} = await api.getSingleSlug('flash-deals');
            //console.log("NewArrivalProductContext", data)
            setFlashDealProducts(data);
            setLoading(false);
        }catch (e) {
            setErrors(e)
        }
    },[])

    return (
        <FlashDealContext.Provider value={flashDealProducts}>
            {children}
        </FlashDealContext.Provider>
    );
};

export default FlashDealProductContext;
