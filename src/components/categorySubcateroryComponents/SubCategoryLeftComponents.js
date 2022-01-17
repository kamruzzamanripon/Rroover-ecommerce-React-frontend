import React,{Fragment} from 'react'

function SubCategoryLeftComponents() {
    return (
        <Fragment>
            <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* Fetch-Categories-from-Root-Category  */}
                        <div className="fetch-categories">
                        <h3 className="title-name">Browse Categories</h3>
                        <h3 className="fetch-mark-category">
                            <a href="shop-v2-sub-category.html">Tops
                            <span className="total-fetch-items">(5)</span>
                            </a>
                        </h3>
                        {/* Level 3 */}
                        <ul>
                            <li>
                            <a href="shop-v3-sub-sub-category.html">T-Shirts
                                <span className="total-fetch-items">(2)</span>
                            </a>
                            </li>
                            <li>
                            <a href="shop-v2-sub-category.html">Hoodies
                                <span className="total-fetch-items">(1)</span>
                            </a>
                            </li>
                            <li>
                            <a href="shop-v3-sub-sub-category.html">Suits
                                <span className="total-fetch-items">(1)</span>
                            </a>
                            </li>
                            <li>
                            <a href="shop-v4-filter-as-category.html">Black Bean T-Shirt
                                <span className="total-fetch-items">(1)</span>
                            </a>
                            </li>
                        </ul>
                        {/* //end Level 3 */}
                        </div>
                        {/* Fetch-Categories-from-Root-Category  /- */}
                        {/* Filters */}
                        {/* Filter-Size */}
                        <div className="facet-filter-associates">
                        <h3 className="title-name">Size</h3>
                        <form className="facet-form" action="#" method="post">
                            <div className="associate-wrapper">
                            <input type="checkbox" className="check-box" id="cbs-01" />
                            <label className="label-text" htmlFor="cbs-01">Male 2XL
                                <span className="total-fetch-items">(2)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-02" />
                            <label className="label-text" htmlFor="cbs-02">Male 3XL
                                <span className="total-fetch-items">(2)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-03" />
                            <label className="label-text" htmlFor="cbs-03">Kids 4
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-04" />
                            <label className="label-text" htmlFor="cbs-04">Kids 6
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-05" />
                            <label className="label-text" htmlFor="cbs-05">Kids 8
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-06" />
                            <label className="label-text" htmlFor="cbs-06">Kids 10
                                <span className="total-fetch-items">(2)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-07" />
                            <label className="label-text" htmlFor="cbs-07">Kids 12
                                <span className="total-fetch-items">(2)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-08" />
                            <label className="label-text" htmlFor="cbs-08">Female Small
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-09" />
                            <label className="label-text" htmlFor="cbs-09">Male Small
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-10" />
                            <label className="label-text" htmlFor="cbs-10">Female Medium
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-11" />
                            <label className="label-text" htmlFor="cbs-11">Male Medium
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-12" />
                            <label className="label-text" htmlFor="cbs-12">Female Large
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-13" />
                            <label className="label-text" htmlFor="cbs-13">Male Large
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-14" />
                            <label className="label-text" htmlFor="cbs-14">Female XL
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-15" />
                            <label className="label-text" htmlFor="cbs-15">Male XL
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            </div>
                        </form>
                        </div>
                        {/* Filter-Size */}
                        {/* Filter-Color */}
                        <div className="facet-filter-associates">
                        <h3 className="title-name">Color</h3>
                        <form className="facet-form" action="#" method="post">
                            <div className="associate-wrapper">
                            <input type="checkbox" className="check-box" id="cbs-16" />
                            <label className="label-text" htmlFor="cbs-16">Heather Grey
                                <span className="total-fetch-items">(1)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-17" />
                            <label className="label-text" htmlFor="cbs-17">Black
                                <span className="total-fetch-items">(1)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-18" />
                            <label className="label-text" htmlFor="cbs-18">White
                                <span className="total-fetch-items">(3)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-19" />
                            <label className="label-text" htmlFor="cbs-19">Mischka Plain
                                <span className="total-fetch-items">(1)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-20" />
                            <label className="label-text" htmlFor="cbs-20">Black Bean
                                <span className="total-fetch-items">(1)</span>
                            </label>
                            </div>
                        </form>
                        </div>
                        {/* Filter-Color /- */}
                        {/* Filter-Brand */}
                        <div className="facet-filter-associates">
                        <h3 className="title-name">Brand</h3>
                        <form className="facet-form" action="#" method="post">
                            <div className="associate-wrapper">
                            <input type="checkbox" className="check-box" id="cbs-21" />
                            <label className="label-text" htmlFor="cbs-21">Calvin Klein
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-22" />
                            <label className="label-text" htmlFor="cbs-22">Diesel
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-23" />
                            <label className="label-text" htmlFor="cbs-23">Polo
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            <input type="checkbox" className="check-box" id="cbs-24" />
                            <label className="label-text" htmlFor="cbs-24">Tommy Hilfiger
                                <span className="total-fetch-items">(0)</span>
                            </label>
                            </div>
                        </form>
                        </div>
                        {/* Filter-Brand /- */}
                        {/* Filter-Price */}
                        <div className="facet-filter-by-price">
                        <h3 className="title-name">Price</h3>
                        <form className="facet-form" action="#" method="post">
                            {/* Final-Result */}
                            <div className="amount-result clearfix">
                            <div className="price-from">$0</div>
                            <div className="price-to">$3000</div>
                            </div>
                            {/* Final-Result /- */}
                            {/* Range-Slider  */}
                            <div className="price-filter" />
                            {/* Range-Slider /- */}
                            {/* Range-Manipulator */}
                            <div className="price-slider-range" data-min={0} data-max={5000} data-default-low={0} data-default-high={3000} data-currency="$" />
                            {/* Range-Manipulator /- */}
                            <button type="submit" className="button button-primary">Filter</button>
                        </form>
                        </div>
                        {/* Filter-Price /- */}
                        {/* Filter-Free-Shipping */}
                        <div className="facet-filter-by-shipping">
                        <h3 className="title-name">Shipping</h3>
                        <form className="facet-form" action="#" method="post">
                            <input type="checkbox" className="check-box" id="cb-free-ship" />
                            <label className="label-text" htmlFor="cb-free-ship">Free Shipping</label>
                        </form>
                        </div>
                        {/* Filter-Free-Shipping /- */}
                        {/* Filter-Rating */}
                        <div className="facet-filter-by-rating">
                        <h3 className="title-name">Rating</h3>
                        <div className="facet-form">
                            {/* 5 Stars */}
                            <div className="facet-link">
                            <div className="item-stars">
                                <div className="star">
                                <span style={{width: '76px'}} />
                                </div>
                            </div>
                            <span className="total-fetch-items">(0)</span>
                            </div>
                            {/* 5 Stars /- */}
                            {/* 4 & Up Stars */}
                            <div className="facet-link">
                            <div className="item-stars">
                                <div className="star">
                                <span style={{width: '60px'}} />
                                </div>
                            </div>
                            <span className="total-fetch-items">&amp; Up (5)</span>
                            </div>
                            {/* 4 & Up Stars /- */}
                            {/* 3 & Up Stars */}
                            <div className="facet-link">
                            <div className="item-stars">
                                <div className="star">
                                <span style={{width: '45px'}} />
                                </div>
                            </div>
                            <span className="total-fetch-items">&amp; Up (0)</span>
                            </div>
                            {/* 3 & Up Stars /- */}
                            {/* 2 & Up Stars */}
                            <div className="facet-link">
                            <div className="item-stars">
                                <div className="star">
                                <span style={{width: '30px'}} />
                                </div>
                            </div>
                            <span className="total-fetch-items">&amp; Up (0)</span>
                            </div>
                            {/* 2 & Up Stars /- */}
                            {/* 1 & Up Stars */}
                            <div className="facet-link">
                            <div className="item-stars">
                                <div className="star">
                                <span style={{width: '15px'}} />
                                </div>
                            </div>
                            <span className="total-fetch-items">&amp; Up (0)</span>
                            </div>
                            {/* 1 & Up Stars /- */}
                        </div>
                        </div>
                        {/* Filter-Rating */}
                        {/* Filters /- */}
                    </div>
        </Fragment>
    )
}

export default SubCategoryLeftComponents
