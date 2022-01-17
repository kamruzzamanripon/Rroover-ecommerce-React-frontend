import React,{Fragment,useState} from 'react'
import Pagination from './categorySubcateroryComponents/Pagination'
import RightComponent from './categorySubcateroryComponents/RightComponent'
import SubCategoryIntroComponent from './categorySubcateroryComponents/SubCategoryIntroComponent'
import SubCategoryLeftComponents from './categorySubcateroryComponents/SubCategoryLeftComponents'

function SubCategoryProduct() {

    return (
        <Fragment>
            {/* Shop-Page */}
            <div className="page-shop u-s-p-t-80">
                <div className="container">

                {/* Shop-Intro */}
                <SubCategoryIntroComponent/>
                {/* Shop-Intro /- */}


                <div className="row">


                    {/* Shop-Left-Side-Bar-Wrapper */}
                    {/*<SubCategoryLeftComponents/>*/}
                    {/* Shop-Left-Side-Bar-Wrapper /- */}



                    {/* Shop-Right-Wrapper */}
                    <RightComponent/>
                    {/* Shop-Right-Wrapper /- */}


                    {/* Shop-Pagination */}
                    {/*<Pagination/>*/}
                    {/* Shop-Pagination /- */}
                </div>
                </div>
            </div>
            {/* Shop-Page /- */}
        </Fragment>
    )
}

export default SubCategoryProduct
