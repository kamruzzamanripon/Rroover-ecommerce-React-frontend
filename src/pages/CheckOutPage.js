import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import CheckOut from '../components/CheckOut'

function CheckOutPage() {
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
                title="Check Out"
                linkOne="Home"
                linkTwo="Check Out"
            />
            {/* Page Introduction Wrapper /- */}

           <CheckOut/>


            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default CheckOutPage
