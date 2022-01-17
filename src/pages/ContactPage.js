import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import Contact from '../components/Contact'
import Footer from '../components/common/Footer'

function ContactPage() {

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
                title="Contact"
                linkOne="Home"
                linkTwo="Contact"
            />
            {/* Page Introduction Wrapper /- */}


            <Contact/>

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default ContactPage
