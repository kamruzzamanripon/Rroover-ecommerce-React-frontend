import React,{useState, useEffect} from 'react';
import Cookie from 'js-cookie';

const userAuthInfo = Cookie.get('user_info');
const userAuthInfoParse = userAuthInfo ? JSON.parse(userAuthInfo) : '';

export const userAuthId = userAuthInfoParse.id
export const userAuth = Cookie.get('user_auth');



const UserAuthHook = () => {
    const [authExits, setAuthExits] = useState(false);
    const [authId, setAuthId] = useState('');
    const [userAuthName, setIserAuthName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(()=>{
        const userAuthInfo = Cookie.get('user_info');
        const userAuthInfoParse = userAuthInfo ? JSON.parse(userAuthInfo) : '';
        const userAuthId = userAuthInfoParse.id;
        const userName = userAuthInfoParse.name;
        const email = userAuthInfoParse.email;
        setAuthId(userAuthId);
        setIserAuthName(userName);
        setUserEmail(email)

        const userAuth = Cookie.get('user_auth');
        setAuthExits(userAuth ? true : false)
    })
    return {
        authExits,
        authId,
        userAuthName,
        userEmail
    };
};

export default UserAuthHook;
