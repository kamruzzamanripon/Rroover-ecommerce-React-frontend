import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import WishList from '../components/WishList'

function WhishListPage() {
    
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
                title="Whish List"
                linkOne="Home"
                linkTwo="Whish list"
            />
            {/* Page Introduction Wrapper /- */}

           <WishList/>
            

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default WhishListPage
