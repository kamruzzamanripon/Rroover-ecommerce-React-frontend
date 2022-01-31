import React, {Fragment, useState} from 'react'
import UserBasicInformation from "./checkout/UserBasicInformation";
import AlterShippingInformation from "./checkout/AlterShippingInformation";
import Note from "./checkout/Note";
import OrderInformation from "./checkout/OrderInformation";
import CheckOutContextHook from "../context/checkout/CheckOutContextHook";
import {useAlert} from 'react-alert';


function CheckOut() {

    const [orderInfo, setOrderInfo] = useState();
    const [basicInfomation, setBasicfomation] = useState();
    const [altaShippingInfo, setAltaShippingInfo] = useState();

    const {userOrderPlace, userBasicInformationSave, alterShipInformationSave} = CheckOutContextHook();
    const alert = useAlert();


    const OrderPlaceForm = (e) => {
        //e.preventDefault();

        if(basicInfomation?.basicInfoExits === false ){
            userBasicInformationSave(basicInfomation);
        }

        if (altaShippingInfo.altraShip === 1) {
            alterShipInformationSave(altaShippingInfo)
        }

        userOrderPlace(orderInfo);
    }

    console.log("place submit Order", basicInfomation?.basicInfoExits)
    console.log("place submit Order", basicInfomation?.basicInfoExits)
    return (
        <Fragment>
            <div className="page-checkout u-s-p-t-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">

                            <form onSubmit={(e) => OrderPlaceForm(e)}>
                                <div className="row">

                                    {/* Billing-&-Shipping-Details */}
                                    <div className="col-lg-6">
                                        <UserBasicInformation setBasicfomation={setBasicfomation}/>
                                        <AlterShippingInformation setAltaShippingInfo={setAltaShippingInfo}/>
                                        <Note/>
                                    </div>
                                    {/* Billing-&-Shipping-Details /- */}


                                    {/* Checkout */}
                                    <div className="col-lg-6">
                                        <OrderInformation OrderPlaceForm={OrderPlaceForm} setOrderInfo={setOrderInfo}/>
                                    </div>
                                    {/* Checkout /- */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CheckOut
