import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import Faq from '../components/Faq'
import Footer from '../components/common/Footer'

function FaqPage() {

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
                title="FAQ"
                linkOne="Home"
                linkTwo="FAQ"
            />
            {/* Page Introduction Wrapper /- */}


            <Faq/>

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default FaqPage
