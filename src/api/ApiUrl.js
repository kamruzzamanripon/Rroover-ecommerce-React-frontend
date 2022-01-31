import axios from "axios";
import Cookie from 'js-cookie';

class ApiUrl {

    getSingleSlug = async (slug) => {
        const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slug);
        return res;
    }


    getTwoSlug = async (slug, paramOne) => {
        const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slug + "/" + paramOne);
        return res;
    }

    getThreeSlug = async (slug, paramOne, paramTwo) => {
        const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slug + "/" + paramOne + "/" + paramTwo);
        return res;
    }

    getQuerySlug = async  (
        slug,
        page = "",
        pageNumber = "",
        queryKeyOne ="" ,
        queryKeyTwo ="",
        queryKeyThree ="",
        queryKeyFour ="",
        queryKeyFive ="",
        queryKeySix ="",
        queryOne="",
        queryTwo="",
        queryThree="",
        queryFour="",
        queryFive="",
        subCategoryId,
    )=>{
        const res = await axios.get(
            `${process.env.REACT_APP_DATABASE_URL}` + "/" + slug + "/?" + page + "=" + pageNumber +
            "&" + queryKeyOne + "=" + queryOne +
            "&" + queryKeyTwo + "=" +  queryTwo +
            "&" + queryKeyThree + "=" + queryThree +
            "&" + queryKeyFour + "=" + queryFour +
            "&" + queryKeyFive + "=" + queryFive +
            "&" + queryKeySix + "=" + subCategoryId
        );
        return res;
    }


    postSingleSlug = async (slug, data)=>{
        const res = await axios.post(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slug, data);

        //console.log("Api Url", res.data.token_info.token)
        return res;
    }


    authGetSlug = async (slug)=>{
        const token = Cookie?.get('passport_frontend');
        const res = await  axios.get(`${process.env.REACT_APP_DATABASE_URL}`  + "/" + slug, { headers: {"Authorization" : `Bearer ${token}`} });
        //console.log("Api errors data", res.data )
        return res;
    }

    authGetSlugOneParam = async (slug, paramOne)=>{
        const token = Cookie?.get('passport_frontend');
        const res = await  axios.get(`${process.env.REACT_APP_DATABASE_URL}`  + "/" + slug+ "/" + paramOne, { headers: {"Authorization" : `Bearer ${token}`} });
        //console.log("Api errors data", res.data )
        return res;
    }

    authPostSlug = async (slug, data)=>{
        const token = Cookie?.get('passport_frontend');
        const res = await  axios.post(`${process.env.REACT_APP_DATABASE_URL}`  + "/" + slug, data,{ headers: {"Authorization" : `Bearer ${token}`} });
        //console.log("Api errors data", res.data )
        return res;
    }

    authDeleteSlug = async (slug, id)=>{
        const token = Cookie?.get('passport_frontend');
        const res = await  axios.delete(`${process.env.REACT_APP_DATABASE_URL}`  + "/" + slug + "/" + id,{ headers: {"Authorization" : `Bearer ${token}`} });
        //console.log("Api errors data", res.data )
        return res;
    }

}

export default ApiUrl;
