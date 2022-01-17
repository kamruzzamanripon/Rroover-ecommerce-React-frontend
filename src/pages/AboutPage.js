import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import About from '../components/About'
import Footer from '../components/common/Footer'

function AboutPage() {

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
                title="About"
                linkOne="Home"
                linkTwo="About"
            />
            {/* Page Introduction Wrapper /- */}


            <About/>

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default AboutPage
