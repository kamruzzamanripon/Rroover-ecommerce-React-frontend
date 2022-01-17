import React,{useContext, useState, useEffect} from 'react';
import ApiUrl from "../../api/ApiUrl";

const NewArrivalContext = React.createContext();

export const useNewArrivalProducts = ()=>{
    return useContext(NewArrivalContext);
}

const NewArrivalProductContext = ({children}) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [newArrivalProducts, setNewArrivalProducts] = useState();

    useEffect(async ()=>{
        try{
            setLoading(true);
            setErrors()
            const {data:{data}} = await api.getSingleSlug('new-arrivals');
            //console.log("NewArrivalProductContext", data)
            setNewArrivalProducts(data);
            setLoading(false);
        }catch (e) {
            setErrors(e)
        }
    },[])

    return (
        <NewArrivalContext.Provider value={newArrivalProducts}>
            {children}
        </NewArrivalContext.Provider>
    );
};

export default NewArrivalProductContext;
