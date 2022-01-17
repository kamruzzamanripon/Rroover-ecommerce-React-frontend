import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import LoginRegister from '../components/LoginRegister'

function LoginRegisterPage() {
    useEffect(()=>{
        window.scroll(0,0)
    })
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

           <LoginRegister/>
            

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default LoginRegisterPage
