import React,{Fragment} from 'react';
import JsPagination from 'react-js-pagination';
import {useCategoryProducts} from '../../context/SingleCategoryProductsContext'


function Pagination({setPageNumber}) {
    const productInfo = useCategoryProducts();
    const paginationInfo = productInfo ? productInfo : [];


    const handlePagination = (pagenumber) => {
        setPageNumber(pagenumber)
    };

    return (
        <Fragment>
            <div className="pagination-area">
                    <div className="pagination-number">
                        <JsPagination
                            activePage={paginationInfo.current_page}
                            itemsCountPerPage={paginationInfo.per_page}
                            totalItemsCount={paginationInfo.total}
                            onChange={handlePagination}
                            nextPageText={'Next'}
                            prevPageText={'Prev'}
                            innerClass=''
                            itemClass=''
                            linkClass=''

                        />
                    </div>
                    </div>
        </Fragment>
    )
}

export default Pagination
