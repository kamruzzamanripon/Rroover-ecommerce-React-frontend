import React,{Fragment, useEffect, useState} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import LoginRegister from '../components/LoginRegister'
import ForgetPassword from "../components/ForgetPassword";

function ResetPasswordPage() {
    const[refreshTime, setRefreshTime] = useState(1);

    useEffect(()=>{
        window.scroll(0,0)
    })

    useEffect(()=>{
        setRefreshTime(2);
        if(refreshTime == 2){
            window.location.reload();
        }

    },[]);
    
    return (
        <Fragment>

            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            {/* Page Introduction Wrapper */}
            <PageIntroductionWrapper
                title="Login OR Regisger"
                linkOne="Home"
                linkTwo="login || Register"
            />
            {/* Page Introduction Wrapper /- */}

           <ForgetPassword/>


            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default ResetPasswordPage
