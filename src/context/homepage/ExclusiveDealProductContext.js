import React,{useContext, useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const ExclusiveDealContext = React.createContext();

export const useExclusiveDealProducts = ()=>{
    return useContext(ExclusiveDealContext);
}

const ExclusiveDealProductContext = ({children}) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [exclusiveDealProducts, setExclusiveDealProducts] = useState();

    useEffect(async ()=>{
        try{
            setLoading(true);
            setErrors()
            const {data:{data}} = await api.getSingleSlug('exclusive-deals');
            //console.log("NewArrivalProductContext", data)
            setExclusiveDealProducts(data);
            setLoading(false);
        }catch (e) {
            setErrors(e)
        }
    },[])

    return (
        <ExclusiveDealContext.Provider value={exclusiveDealProducts}>
            {children}
        </ExclusiveDealContext.Provider>
    );
};

export default ExclusiveDealProductContext;
