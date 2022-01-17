import React,{useContext, useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const SuperSaleContext = React.createContext();

export const useSuperSaleProducts = ()=>{
    return useContext(SuperSaleContext);
}

const SuperSaleProductContext = ({children}) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [superSaleProducts, setSuperSaleProducts] = useState();

    useEffect(async ()=>{
        try{
            setLoading(true);
            setErrors()
            const {data:{data}} = await api.getSingleSlug('super-sales');
            //console.log("NewArrivalProductContext", data)
            setSuperSaleProducts(data);
            setLoading(false);
        }catch (e) {
            setErrors(e)
        }
    },[])

    return (
        <SuperSaleContext.Provider value={superSaleProducts}>
            {children}
        </SuperSaleContext.Provider>
    );
};

export default SuperSaleProductContext;
