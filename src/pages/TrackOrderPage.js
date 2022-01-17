import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import Footer from '../components/common/Footer'
import TrackOrder from '../components/TrackOrder'

function TrackOrderPage() {

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
                title="Track Order"
                linkOne="Home"
                linkTwo="Track Order"
            />
            {/* Page Introduction Wrapper /- */}


            <TrackOrder/>

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default TrackOrderPage
