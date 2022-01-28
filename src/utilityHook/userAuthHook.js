import Cookie from 'js-cookie';

const userAuthInfo = Cookie.get('user_info');
const userAuthInfoParse = userAuthInfo ? JSON.parse(userAuthInfo) : '';

export const userAuthId = userAuthInfoParse.id
export const userAuth = Cookie.get('user_auth');
