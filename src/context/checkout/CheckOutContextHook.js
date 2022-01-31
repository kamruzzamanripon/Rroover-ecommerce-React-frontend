import React, {useEffect, useState} from 'react';
import ApiUrl from "../../api/ApiUrl";
import {useAlert} from 'react-alert';
import {useNavigate} from 'react-router-dom';

const CheckOutContextHook = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [userInformation, setUserInformation] = useState();
    const [orderplaceInfo, setOrderplaceInfo] = useState();

    const api = new ApiUrl();
    const alert = useAlert();
    let navigate = useNavigate();

    const userBasicInformationUrlFecth = async (userId) => {
        try {
            setUserInformation('');
            setLoading(true);
            setErrors();
            const {data} = await api.authGetSlugOneParam('check-out/userinfo', userId);

            //const bData = data.data;
            //console.log("user info context", data)
            setUserInformation(data.data);
            setLoading(false);
        } catch (e) {
            console.log(e.response)
        }
    }

    const userBasicInformationSave = async (basicInfomation) => {
        try {
            setUserInformation('');
            setLoading(true);
            setErrors();

            const formData = new FormData();
            formData.append('user_id', basicInfomation ? basicInfomation.userId : "");
            formData.append('address', basicInfomation ? basicInfomation.address : "");
            formData.append('city', basicInfomation ? basicInfomation.city : "");
            formData.append('zip_code', basicInfomation ? basicInfomation.zipcode : "");
            formData.append('mobile', basicInfomation ? basicInfomation.mobile : "");

            const {data} = await api.authPostSlug('check-out/userinfo', formData);

            //const bData = data.data;
            //console.log("user info context", data)
            setUserInformation(data.data);
            setLoading(false);
        } catch (e) {
            console.log(e.response)
        }
    }

    const alterShipInformationSave = async (altaShippingInfo) => {
        try {
            //setUserInformation('');
            setLoading(true);
            setErrors();

            const formData = new FormData();
            formData.append('user_id', altaShippingInfo ? altaShippingInfo.userId : "");
            formData.append('shipping_alter', altaShippingInfo ? altaShippingInfo.altraShip : "");
            formData.append('shipping_name', altaShippingInfo ? altaShippingInfo.shipUserName : "");
            formData.append('shipping_address', altaShippingInfo ? altaShippingInfo.shipAddress : "");
            formData.append('shipping_city', altaShippingInfo ? altaShippingInfo.shipCity : "");
            formData.append('shipping_zipcode', altaShippingInfo ? altaShippingInfo.shipZipcode : "");
            formData.append('shipping_email', altaShippingInfo ? altaShippingInfo.shipEmail : "");
            formData.append('shipping_mobile', altaShippingInfo ? altaShippingInfo.shipMobile : "");

            //const {data} = await api.authPostSlug('check-out/userinfo', formData);
            const {data} = await api.authPostSlug('check-out/alter-shipinfo', formData);

            //const bData = data.data;
            //console.log("user info context", data)
            //setUserInformation(data.data);
            setLoading(false);
        } catch (e) {
            console.log(e.response)
        }
    }

    const userOrderPlace = async (orderInfo) => {
        try {
            setOrderplaceInfo('');
            setLoading(true);
            setErrors();

            const formData = new FormData();
            formData.append('user_id', orderInfo ? orderInfo.userId : "");
            formData.append('total_price', orderInfo ? orderInfo.totalPrice : "");
            formData.append('payment_method', orderInfo ? orderInfo.paymentMethod : "");

            const {data: {data}} = await api.authPostSlug('check-out/place-order', formData);

            //const bData = data.data;
            //console.log(data)
            setOrderplaceInfo(data);
            setLoading(false);
            alert.show(data ? "Your Order Place successfully, please check Mail and your Invoice : " + data.invoice_no : "Please try Again");
            navigate('/', { replace: true })
        } catch (e) {
            console.log(e.response)
        }
    }


    return {
        userBasicInformationUrlFecth,
        userOrderPlace,
        userBasicInformationSave,
        alterShipInformationSave,
        userInformation
    };
};

export default CheckOutContextHook;
