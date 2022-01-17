import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import LostPassword from '../components/LostPassword'

function LostPasswordPage() {
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
                title="Lost Password"
                linkOne="Home"
                linkTwo="Lost Password"
            />
            {/* Page Introduction Wrapper /- */}

           <LostPassword/>
            

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default LostPasswordPage
