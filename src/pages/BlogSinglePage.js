import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import BlogSingle from '../components/BlogSingle'
import Footer from '../components/common/Footer'

function BlogSinglePage() {

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
                title="Blog"
                linkOne="Home"
                linkTwo="Blog"
            />
            {/* Page Introduction Wrapper /- */}


            <BlogSingle/>

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default BlogSinglePage
