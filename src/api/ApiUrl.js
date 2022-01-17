import axios from "axios";

class ApiUrl {

    getSingleSlug = async (slug) => {
        const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slug);
        return res;
    }


    getTwoSlug = async (slugOne, slugTwo) => {
        const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slugOne + "/" + slugTwo);
        return res;
    }

    getThreeSlug = async (slugOne, slugTwo, slugThree) => {
        const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}` + "/" + slugOne + "/" + slugTwo + "/" + slugThree);
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
        return res;
    }
}

export default ApiUrl;
