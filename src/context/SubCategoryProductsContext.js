import React, {useContext, useEffect, useState} from 'react';
import ApiUrl from '../api/ApiUrl';

const subCategoryContext = React.createContext();

export const useSubCategoryProduct = ()=>{
    return useContext(subCategoryContext)
}

const SubCategoryProductsContext = ({children, catId, subCatId}) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [subCategoryProducts, setSubCategoryProducts] = useState();

    useEffect(async () => {
        try {
            setLoading(true);
            setErrors()

            const {data} = await api.getThreeSlug("subcategory", catId, subCatId)

            //console.log("subCategoryProductsData", data)
            setSubCategoryProducts(data);
            setLoading(false);
        } catch (e) {
            setErrors(e);
        }
    },[catId, subCatId])
    return (
        !loading ? (
            <subCategoryContext.Provider value={subCategoryProducts}>
                {children}
            </subCategoryContext.Provider>
        ) : "Loading...."
    );
};

export default SubCategoryProductsContext;
