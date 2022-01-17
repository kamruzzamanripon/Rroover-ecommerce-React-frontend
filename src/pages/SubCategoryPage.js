import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Header from '../components/common/Header';
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper';
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal';
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal';
import SubCategoryProduct from '../components/SubCategoryProduct'
import Footer from '../components/common/Footer'
import SubCategoryProductsContext from "../context/SubCategoryProductsContext";

function SubCategoryPage() {
    const {catId} = useParams();
    const {subCatId} = useParams();


    useEffect(() => {
        window.scroll(0, 0)
    });
    console.log("sub idInfo",);
    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            <SubCategoryProductsContext catId={catId} subCatId={subCatId}>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="Sub Category Product Info"
                    linkOne="Home"
                    linkTwo="Sub-Category"
                />
                {/* Page Introduction Wrapper /- */}


                <SubCategoryProduct/>
            </SubCategoryProductsContext>
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

export default SubCategoryPage
