import React, {useEffect, useState} from 'react';
import ApiUrl from '../../../api/ApiUrl'

const useWomenClothingContextHook = () => {
    const api = new ApiUrl();
    const [menProduts, setmenProducts] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    const latestProduct = async () => {
        try {
            setmenProducts();
            setLoading(true);
            setErrors({});
            const {data} = await api.getSingleSlug('womens-latest-product/latest_product');

            const bData = data.data;
            //console.log(dData)
            setmenProducts(bData);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrors(e)
        }
    };
    const bestSellingProduts = async () => {
        try {
            setmenProducts();
            setLoading(true);
            setErrors({});
            const {data} = await api.getSingleSlug('womens-latest-product/best_selling');

            const bData = data.data;
            //console.log(dData)
            setmenProducts(bData);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrors({e})
        }
    };
    const topRatingProduts = async () => {
        try {
            setmenProducts();
            setLoading(true);
            setErrors({});
            const {data} = await api.getSingleSlug('womens-latest-product/top_rating');

            const bData = data.data;
            //console.log(dData)
            setmenProducts(bData);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrors({e})
        }
    };
    const featureProduts = async () => {
        try {
            setmenProducts();
            setLoading(true);
            setErrors({});
            const {data} = await api.getSingleSlug('womens-latest-product/featured');

            const bData = data.data;
            //console.log(dData)
            setmenProducts(bData);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrors({e})
        }
    };

    return {
        menProduts,
        loading,
        errors,
        latestProduct,
        bestSellingProduts,
        topRatingProduts,
        featureProduts
    };
};

export default useWomenClothingContextHook;
