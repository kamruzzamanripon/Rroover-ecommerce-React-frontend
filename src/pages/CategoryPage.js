import React, {Fragment, useEffect, useState} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import CategoryProduct from '../components/CategoryProduct'
import Footer from '../components/common/Footer'
import SingleCategoryProductsContextProvider from '../context/SingleCategoryProductsContext'
import {useParams} from 'react-router-dom'

function CategoryPage() {
    const [sortOrder, setSortOrder] = useState();
    const [showProduct, setShowProduct] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [categoryIdRef, setCategoryIdRef] = useState();
    const [subCategoryId, setSubCategoryId] = useState('');

    useEffect(() => {
        window.scroll(0, 0)
    })

    let {categoryId} = useParams();

     useEffect(()=>{
         setCategoryIdRef(categoryId)
     },[categoryId])



    console.log("subCategoryId", subCategoryId)

    return (
        <Fragment>
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            <SingleCategoryProductsContextProvider categoryId={categoryIdRef} sortOrder={sortOrder}
                                                   showProduct={showProduct} pageNumber={pageNumber} subCategoryId={subCategoryId}>
                {/* Page Introduction Wrapper */}
                <PageIntroductionWrapper
                    title="Category Product Info"
                    linkOne="Homexx"
                    linkTwo="Category"
                />
                {/* Page Introduction Wrapper /- */}


                <CategoryProduct setSortOrder={setSortOrder} setShowProduct={setShowProduct}
                                 setPageNumber={setPageNumber} setSubCategoryId={setSubCategoryId}/>

            </SingleCategoryProductsContextProvider>
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

export default CategoryPage
