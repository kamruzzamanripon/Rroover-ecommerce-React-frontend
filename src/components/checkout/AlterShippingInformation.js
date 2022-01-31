import React, {Fragment, useState,useEffect} from 'react';
import UserAuthHook from "../../utilityHook/userAuthHook";

const AlterShippingInformation = ({setAltaShippingInfo}) => {
    const [altraShip, setAltraShip] = useState(0);
    const [shipUserName, setShipUserName] = useState();
    const [shipEmail, setShipEmail] = useState();
    const [shipAddress, setShipAddress] = useState();
    const [shipCity, setShipCity] = useState();
    const [shipZipcode, setShipZipcode] = useState();
    const [shipMobile, setShipMobile] = useState();
    const [userId, setUserId] = useState();

    const {authId} = UserAuthHook();

    useEffect(()=>{
        setAltaShippingInfo({
            userId,
            altraShip,
            shipUserName,
            shipEmail,
            shipAddress,
            shipCity,
            shipZipcode,
            shipMobile
        })
    },[altraShip,shipUserName,shipEmail,shipAddress,shipCity,shipZipcode,shipMobile])

    useEffect(()=>{
        setUserId(authId);
    })
    console.log("Altra Ship", altraShip)
    return (
        <Fragment>
            <h4 className="section-h4">Shipping Details</h4>
            <div className="u-s-m-b-24">
                <input type="checkbox" className="check-box" id="ship-to-different-address"
                       data-toggle="collapse" data-target="#showdifferent" value={altraShip}
                       onChange={(e)=>setAltraShip(altraShip === 0 ? 1 : 0)}
                />
                <label className="label-text" htmlFor="ship-to-different-address">Ship to a
                    different address?</label>
            </div>
            <div className="collapse" id="showdifferent">
                {/* Form-Fields */}
                <div className="group-inline u-s-m-b-13">
                    <div className="group-1 u-s-p-r-16">
                        <label htmlFor="first-name-extra">First Name
                            <span className="astk">*</span>
                        </label>
                        <input type="text" id="first-name-extra" className="text-field"
                               value={shipUserName}
                               onChange={(e)=>setShipUserName(e.target.value)}
                        />
                    </div>

                </div>

                <div className="street-address u-s-m-b-13">
                    <label htmlFor="req-st-address-extra">Street Address
                        <span className="astk">*</span>
                    </label>
                    <input type="text" id="req-st-address-extra" className="text-field"
                           placeholder="House name and street name"
                           value={shipAddress}
                           onChange={(e)=>setShipAddress(e.target.value)}
                    />
                </div>
                <div className="u-s-m-b-13">
                    <label htmlFor="town-city-extra">Town / City
                        <span className="astk">*</span>
                    </label>
                    <input type="text" id="town-city-extra" className="text-field"
                           value={shipCity}
                           onChange={(e)=>setShipCity(e.target.value)}
                    />
                </div>

                <div className="u-s-m-b-13">
                    <label htmlFor="postcode-extra">Postcode / Zip
                        <span className="astk">*</span>
                    </label>
                    <input type="text" id="postcode-extra" className="text-field"
                           value={shipZipcode}
                           onChange={(e)=>setShipZipcode(e.target.value)}
                    />
                </div>
                <div className="group-inline u-s-m-b-13">
                    <div className="group-1 u-s-p-r-16">
                        <label htmlFor="email-extra">Email address
                            <span className="astk">*</span>
                        </label>
                        <input type="text" id="email-extra" className="text-field"
                               value={shipEmail}
                               onChange={(e)=>setShipEmail(e.target.value)}
                        />
                    </div>
                    <div className="group-2">
                        <label htmlFor="phone-extra">Phone
                            <span className="astk">*</span>
                        </label>
                        <input type="text" id="phone-extra" className="text-field"
                               value={shipMobile}
                               onChange={(e)=>setShipMobile(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AlterShippingInformation;
