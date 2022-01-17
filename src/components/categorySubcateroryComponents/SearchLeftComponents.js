import React,{Fragment} from 'react'

function SearchLeftComponents() {
    return (
        <Fragment>
             <div className="col-lg-3 col-md-3 col-sm-12">
                    {/* Fetch-Categories-from-Root-Category  */}
                    <div className="fetch-categories">
                        <h3 className="title-name">Browse Categories</h3>
                        <ul>
                        <li>
                            <a href="shop-v1-root-category.html">Men's Clothing</a>
                            <button className="button-icon ion ion-md-add js-open" />
                            <ul style={{display: 'block'}}>
                            <li>
                                <a href="shop-v2-sub-category.html">Tops</a>
                                <button className="button-icon ion ion-md-add js-open" />
                                <ul style={{display: 'block'}}>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Suits</a>
                                </li>
                                <li>
                                    <a href="shop-v4-filter-as-category.html">Black Bean T-Shirt</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Outwear</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                </li>
                                <li>
                                    <a href="shop-v2-sub-category.html">Trench</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Parkas</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Sweaters</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Accessories</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Watches</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Ties</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Scarves</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Belts</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Bottoms</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Casual Pants</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Jeans</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Shorts</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Underwear</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Boxers</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Briefs</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Robes</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Socks</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Sunglasses</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Pilot</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Wayfarer</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Square</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Round</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a>Women's Clothing</a>
                            <button className="button-icon ion ion-md-add" />
                            <ul>
                            <li>
                                <a href="shop-v2-sub-category.html">Tops</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Blouses &amp; Shirts</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">T-shirts</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Sweater</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Intimates</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Bras</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Brief Sets</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Bustiers &amp; Corsets</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Panties</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Wedding &amp; Events</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Wedding Dresses</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Evening Dresses</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Prom Dresses</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Flower Dresses</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Bottoms</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Skirts</a>
                                </li>
                                <li>
                                    <a href="shop-v2-sub-category.html">Shoes</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Leggings</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Jeans</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Outwear &amp; Jackets</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Blazers</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Basics Jackets</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Trench</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Leather &amp; Suede</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Accessories</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Sunglasses</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Headwear</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Baseball Caps</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Belts</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">Toys Hobbies &amp; Robots</a>
                            <button className="button-icon ion ion-md-add" />
                            <ul>
                            <li>
                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">RC Helicopter</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">RC Lego Robots</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">RC Car</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">RC Boat</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">RC Robot</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Multi Rotor Parts</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">FPV System</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Radios &amp; Receiver</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Battery &amp; Charger</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-v2-sub-category.html">Solar Energy</a>
                                <button className="button-icon ion ion-md-add" />
                                <ul>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Solar Powered Toy</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Solar Powered System</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">Mobiles &amp; Tablets</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">Consumer Electronics</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">Books &amp; Audible</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">Beauty &amp; Health</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">Furniture Home &amp; Office</a>
                        </li>
                        </ul>
                    </div>
                    {/* Fetch-Categories-from-Root-Category  /- */}
                    {/* Filters */}
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
                            <span className="total-fetch-items">&amp; Up (8)</span>
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

export default SearchLeftComponents
