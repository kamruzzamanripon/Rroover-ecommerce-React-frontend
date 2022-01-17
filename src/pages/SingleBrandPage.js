import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import Header from '../components/common/Header';
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper';
import Footer from '../components/common/Footer';
import RightComponent from "../components/categorySubcateroryComponents/RightComponent";
import SingleBrandProductsContext from "../context/SingleBrandProductsContext";

function SingleBrandPage() {
    const {brandId} = useParams();


    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            <SingleBrandProductsContext brandId={brandId}>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="New Arrivals Product"
                    linkOne="Home"
                    linkTwo="New Arrivals"
                />
                {/* Page Introduction Wrapper /- */}


                <RightComponent
                    col="12"
                />
            </SingleBrandProductsContext>

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default SingleBrandPage
