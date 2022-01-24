import React, {Fragment, useEffect,useState} from 'react';
import Thead from "./WishList/Thead";
import Tbody from "./WishList/Tbody";
import useWishListContextHook from "../context/wishListPage/WishListContextHook";



function WishList() {
    const [dataFetch, setDataFetch] = useState(false)
    const {loading, errors, wishListData, wishListDataFetch} = useWishListContextHook();
    //const AllWishListData = wishListData?.data?.data;

    useEffect(()=>{
      wishListDataFetch();
        setDataFetch(false)
    },[dataFetch])


//console.log("wishListDataAll", wishListDataAll)

    return (
        <Fragment>
            <div className="page-wishlist u-s-p-t-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Products-List-Wrapper */}
                            <div className="table-wrapper u-s-m-b-60">
                                <table>

                                    <Thead/>

                                    <Tbody wishListData={wishListData} loading={loading} setDataFetch={setDataFetch}/>

                                </table>
                            </div>
                            {/* Products-List-Wrapper /- */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WishList
