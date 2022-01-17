import React, {Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import CustomDeal from '../components/CustomDeal'
import Footer from '../components/common/Footer'
import NewArrivalProductContext from "../context/homepage/NewArrivalProductContext";

function NewArrivalsPage() {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            <NewArrivalProductContext>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="New Arrivals Product"
                    linkOne="Home"
                    linkTwo="New Arrivals"
                />
                {/* Page Introduction Wrapper /- */}


                <CustomDeal
                    title="New Arrivals Product"
                    item=''
                />
            </NewArrivalProductContext>


            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default NewArrivalsPage
