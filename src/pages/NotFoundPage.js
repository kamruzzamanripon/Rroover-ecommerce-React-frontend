import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import NotFound from '../components/NotFound'


function NotFoundPage() {

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
                title="Sorry To Say"
                linkOne="Home"
                linkTwo="404"
            />
            {/* Page Introduction Wrapper /- */}

            <NotFound/>

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default NotFoundPage
