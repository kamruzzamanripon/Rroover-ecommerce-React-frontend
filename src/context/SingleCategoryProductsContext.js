import React, {useContext, useEffect, useState} from 'react';
import ApiUrl from "../api/ApiUrl";

const SingleCategoryProductsContext = React.createContext();

export const useCategoryProducts = () => {
    return useContext(SingleCategoryProductsContext)
}

const SingleCategoryProductsContextProvider = ({children, categoryId, sortOrder, showProduct, pageNumber, subCategoryId}) => {
    const api = new ApiUrl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [singleCategoryProducts, setSingleCategoryProducts] = useState();

    useEffect(async () => {
        //console.log("showProduct context", showProduct)
        console.log("categoryId context", categoryId)
        try {
            setLoading(true);
            setErrors();
            let page = "page";
            let queryKeyOne = "catId";
            let queryKeyTwo = "priceOrder";
            let queryKeyThree = "bestRating";
            let queryKeyFour = "bestSelling";
            let queryKeyFive = "showProduct";
            let queryKeySix = "subCatId";
            let queryOne = categoryId;
            var queryTwo = "" ;
            var queryThree = "";
            var queryFour = "";
            var queryFive = "";
            if(sortOrder === '1'){
                 queryThree = "1";
            }else if (sortOrder === '2'){
                queryTwo = "asc";
            }else if(sortOrder === '3'){
                queryTwo = "desc";
            }else if(sortOrder === '4'){
                queryFour = "1";
            }

            if(showProduct === '8' || showProduct === '16' || showProduct === '24'){
                queryFive = showProduct;
            }


            const {data: {data}} = await api.getQuerySlug(
                'single-category-products',
                page,
                pageNumber,
                queryKeyOne,
                queryKeyTwo ,
                queryKeyThree,
                queryKeyFour,
                queryKeyFive,
                queryKeySix,
                queryOne,
                queryTwo,
                queryThree,
                queryFour,
                queryFive,
                subCategoryId
            );

            //console.log(data)
            setSingleCategoryProducts(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrors(e);
        }
    }, [sortOrder, showProduct, pageNumber, categoryId, subCategoryId]);

    return (
        !loading ? (
            <SingleCategoryProductsContext.Provider value={singleCategoryProducts}>
                {children}
            </SingleCategoryProductsContext.Provider>
        ) : "Loading..."
    );
};

export default SingleCategoryProductsContextProvider;
