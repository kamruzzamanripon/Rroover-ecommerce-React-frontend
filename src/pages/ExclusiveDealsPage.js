import React, {Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import CustomDeal from '../components/CustomDeal'
import Footer from '../components/common/Footer'
import ExclusiveDealProductContext from "../context/homepage/ExclusiveDealProductContext";

function ExclusiveDealsPage() {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}
            <ExclusiveDealProductContext>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="Exclusive Product"
                    linkOne="Home"
                    linkTwo="Exclusive Product"
                />
                {/* Page Introduction Wrapper /- */}


                <CustomDeal
                    title="Exclusive Deal Product"
                    item=''
                />
            </ExclusiveDealProductContext>


            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default ExclusiveDealsPage
