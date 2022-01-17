import React, {Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import CustomDeal from '../components/CustomDeal'
import Footer from '../components/common/Footer'
import SuperSaleProductContext from "../context/homepage/SuperSaleProductContext";

function SuperSalePage() {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            <SuperSaleProductContext>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="Super Sale"
                    linkOne="Home"
                    linkTwo="Super Sale"
                />
                {/* Page Introduction Wrapper /- */}


                <CustomDeal
                    title="Super Sale Products"
                    item='11 Items'
                />
            </SuperSaleProductContext>

            {/* Footer */
            }
            <Footer/>
            {/* Footer /- */
            }
        </Fragment>
    )
}

export default SuperSalePage
