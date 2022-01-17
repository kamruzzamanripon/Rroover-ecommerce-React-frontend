import React,{Fragment, useEffect, useState} from 'react'
import {useCategoryProducts} from '../../context/SingleCategoryProductsContext'

function CategoryLeftComponent({setSubCategoryId}) {
    const productInfo = useCategoryProducts();
    const categoryInfo = productInfo ? productInfo?.data[0]?.category : [];
    const subCategoryInfo = productInfo ? productInfo?.data[0]?.category?.subcategory : [];
    const [resetSubcategoryId, setResetSubcategoryId] = useState(false);

    //console.log("subCategory" , subcategoryInfo[0]?.category.subcategory)
    useEffect(()=>{
       if( productInfo && !productInfo.data.length){
           setSubCategoryId("")
       }
    }, [])

    //console.log("productInfo" , categoryInfo)
    //console.log("subCategory" , subCategoryInfo)
    return (
        <Fragment>
             <div className="col-lg-3 col-md-3 col-sm-12">
                    {/* Fetch-Categories-from-Root-Category  */}
                    <div className="fetch-categories">
                        <h3 className="title-name">Browse Categories</h3>
                        {/* Level-2 */}
                        <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">{categoryInfo?.name}

                        </a>
                        </h3>
                        {/* Level-2 /- */}
                        {/* Level-3 */}

                        <ul>
                            {productInfo && productInfo.data.length > 0 && subCategoryInfo   ? (
                                subCategoryInfo?.map((subcategory,index)=>{
                                    return <li key={index}>
                                        {/*<a href="#">{subcategory.name} </a>*/}
                                        <span onClick={()=>setSubCategoryId( subcategory.id )}>{subcategory?.name}</span>
                                    </li>
                                })
                            ) : (
                                <span >"Data is not found"</span>
                                )}


                        </ul>
                        {/* Level-3 /- */}


                    </div>
                    {/* Fetch-Categories-from-Root-Category  /- */}
                    </div>
        </Fragment>
    )
}

export default CategoryLeftComponent
