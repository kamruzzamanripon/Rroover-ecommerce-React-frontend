import React from 'react';
import TdProductInfo from "./TdProductInfo";
import TdProductPrice from "./TdProductPrice";
import TdProductStock from "./TdProductStock";
import TdAction from "./TdAction";

const Tbody = ({wishListData, loading, setDataFetch}) => {


    return (
        <tbody>

        {!loading && wishListData ? (
            wishListData.map((singleWishlist, index)=>(
                <tr key={index}>

                    <TdProductInfo
                        src="images/product/product@1x.jpg"
                        name={singleWishlist.name}
                    />

                    <TdProductPrice price={singleWishlist.actual_price} />
                    <TdProductStock />
                    <TdAction productId={singleWishlist.id} setDataFetch={setDataFetch} price={singleWishlist.actual_price}/>

                </tr>
            ))
        ) : "Data is Loading"}



        </tbody>
    );
};

export default Tbody;
