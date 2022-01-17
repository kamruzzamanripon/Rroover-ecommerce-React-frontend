import React, {Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import CustomDeal from '../components/CustomDeal'
import Footer from '../components/common/Footer'
import FlashDealProductContext from "../context/homepage/FlashDealProductContext";

function FlashDealsPage() {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}
            <FlashDealProductContext>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="Flash Deal"
                    linkOne="Home"
                    linkTwo="Flash Deal"
                />
                {/* Page Introduction Wrapper /- */}


                <CustomDeal
                    title="Flash Deal Products"
                    item=''
                />
            </FlashDealProductContext>

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default FlashDealsPage
