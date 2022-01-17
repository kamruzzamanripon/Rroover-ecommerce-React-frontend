import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import TermsAndConditions from '../components/TermsAndConditions'
import Footer from '../components/common/Footer'

function TermsAndConditionsPage() {

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
                title="Terms and Condition"
                linkOne="Home"
                linkTwo="Terms & Conditions"
            />
            {/* Page Introduction Wrapper /- */}


            <TermsAndConditions/>

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default TermsAndConditionsPage
