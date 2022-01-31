import React, {Fragment, useEffect, useState} from 'react';
import CheckOutContextHook from "../../context/checkout/CheckOutContextHook";
import UserAuthHook from '../../utilityHook/userAuthHook'

const UserBasicInformation = ({setBasicfomation}) => {
    const [userId, setUserId] = useState();
    const {authId, userAuthName, userEmail} = UserAuthHook();

    const {userBasicInformationUrlFecth, userInformation} = CheckOutContextHook();

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [zipcode, setZipcode] = useState();
    const [mobile, setMobile] = useState();
    const [basicInfoExits, setBasicInfoExits] = useState(false);

    useEffect(()=>{
        setUserId(authId);
        setUserName(userInformation && userInformation.user ? userInformation.user.name : userAuthName);
        setEmail(userInformation && userInformation.user ? userInformation.user.email : userEmail);
        setAddress(userInformation ? userInformation.address : address);
        setCity(userInformation ? userInformation.city : city);
        setZipcode(userInformation ? userInformation.zip_code : zipcode);
        setMobile(userInformation ? userInformation.mobile : mobile);
        setBasicInfoExits((address && city && zipcode && mobile) ? true : false)
    })

    useEffect(()=>{
        userBasicInformationUrlFecth(userId)
    },[userId])

    useEffect(()=>{
        if(!userInformation){
            setBasicfomation({
                userId,
                address,
                city,
                zipcode,
                mobile,
                basicInfoExits
            })

        }
    },[userInformation,userId, address, city, zipcode, mobile])


    console.log("checkout pagexx", address)
    console.log("checkout pagexx", basicInfoExits)
    return (
        <Fragment>
            <h4 className="section-h4">Billing Details</h4>
            {/* Form-Fields */}
            <div className="group-inline u-s-m-b-13">
                <div className="group-1 u-s-p-r-16">
                    <label htmlFor="first-name"> Name
                        <span className="astk">*</span>
                    </label>
                    <input type="text" id="first-name" className="text-field"
                           value={userName}
                    />
                </div>

            </div>

            <div className="street-address u-s-m-b-13">
                <label htmlFor="req-st-address">Street Address
                    <span className="astk">*</span>
                </label>
                <input type="text" id="req-st-address" className="text-field" placeholder="House name and street name"
                       value={address}
                       onChange={(e)=>setAddress(e.target.value)}
                />

            </div>
            <div className="u-s-m-b-13">
                <label htmlFor="town-city">Town / City
                    <span className="astk">*</span>
                </label>
                <input type="text" id="town-city" className="text-field"
                       value={city}
                       onChange={(e)=>setCity(e.target.value)}
                />
            </div>

            <div className="u-s-m-b-13">
                <label htmlFor="postcode">Postcode / Zip
                    <span className="astk">*</span>
                </label>
                <input type="text" id="postcode" className="text-field"
                       value={zipcode}
                       onChange={(e)=>setZipcode(e.target.value)}
                />
            </div>
            <div className="group-inline u-s-m-b-13">
                <div className="group-1 u-s-p-r-16">
                    <label htmlFor="email">Email address
                        <span className="astk">*</span>
                    </label>
                    <input type="text" id="email" className="text-field"
                           value={email}
                    />
                </div>
                <div className="group-2">
                    <label htmlFor="phone">Phone/Mobile
                        <span className="astk">*</span>
                    </label>
                    <input type="text" id="phone" className="text-field"
                           value={mobile}
                           onChange={(e)=>setMobile(e.target.value)}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default UserBasicInformation;
