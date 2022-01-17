import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import Cart from '../components/Cart'

function CartPage() {
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
                title="Cart Element"
                linkOne="Home"
                linkTwo="Cart"
            />
            {/* Page Introduction Wrapper /- */}

           <Cart/>
            

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default CartPage
