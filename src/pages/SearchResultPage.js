import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import Footer from '../components/common/Footer'
import SearchResult from '../components/SearchResult'

function SearchResultPage() {

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
                title="Search Clothing"
                linkOne="Home"
                linkTwo="Search Result"
            />
            {/* Page Introduction Wrapper /- */}


            <SearchResult/>

             {/* Newsletter-Modal */}
             <NewsLetterModal/>
            {/* Newsletter-Modal /- */}

           
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default SearchResultPage
