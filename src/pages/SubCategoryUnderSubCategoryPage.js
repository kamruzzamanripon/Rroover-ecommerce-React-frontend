import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import SubCategoryUnderSubCategoryProduct from '../components/SubCategoryUnderSubCategoryProduct'
import Footer from '../components/common/Footer'

function SubCategoryUnderSubCategoryPage() {

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
                 title="Sub-Category Under Sub-Category Product Info"
                 linkOne="Home"
                 linkTwo="Sub-Category-Under-Subcategory"
            />
            {/* Page Introduction Wrapper /- */}


            <SubCategoryUnderSubCategoryProduct/>

             {/* Newsletter-Modal */}
             <NewsLetterModal/>
            {/* Newsletter-Modal /- */}

            {/* Quick-view-Modal */}
            <QuickViewModal/>
            {/* Quick-view-Modal /- */}

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default SubCategoryUnderSubCategoryPage
