import React,{Fragment} from 'react'
import SubCategoryUnderSubCategoryIntroComponent from './categorySubcateroryComponents/SubCategoryUnderSubCategoryIntroComponent'
import SubCategoryUnderSubCategoryLeftComponent from './categorySubcateroryComponents/SubCategoryUnderSubCategoryLeftComponent'
import Pagination from './categorySubcateroryComponents/Pagination'
import RightComponent from './categorySubcateroryComponents/RightComponent'

function SubCategoryUnderSubCategoryProduct() {
    return (
        <Fragment>
             {/* Shop-Page */}
             <div className="page-shop u-s-p-t-80">
                <div className="container">
                
                {/* Shop-Intro */}
                <SubCategoryUnderSubCategoryIntroComponent/>
                {/* Shop-Intro /- */}


                <div className="row">

                    {/* Shop-Left-Side-Bar-Wrapper */}
                    <SubCategoryUnderSubCategoryLeftComponent/>
                    {/* Shop-Left-Side-Bar-Wrapper /- */}



                    {/* Shop-Right-Wrapper */}
                    <RightComponent/>
                    {/* Shop-Right-Wrapper /- */}


                    {/* Shop-Pagination */}
                    <Pagination/>
                    {/* Shop-Pagination /- */}
                </div>
                </div>
            </div>
            {/* Shop-Page /- */}

        </Fragment>
    )
}

export default SubCategoryUnderSubCategoryProduct
