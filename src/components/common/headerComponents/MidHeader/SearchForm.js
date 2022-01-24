import React from 'react';

const SearchForm = () => {
    return (
        <form className="form-searchbox">
            <label className="sr-only" htmlFor="search-landscape">Search</label>
            <input id="search-landscape" type="text" className="text-field" placeholder="Search everything" />
            <div className="select-box-position">
                <div className="select-box-wrapper select-hide">
                    <label className="sr-only" htmlFor="select-category">Choose category for search</label>
                    <select className="select-box" id="select-category">
                        <option value="1">
                            All
                        </option>
                        <option value="1">Men's Clothing</option>
                        <option value="2">Women's Clothing
                        </option>
                        <option value="3">Toys Hobbies &amp; Robots
                        </option>
                        <option value="4">Mobiles &amp; Tablets
                        </option>
                        <option value="5">Consumer Electronics
                        </option>
                        <option value="6">Books &amp; Audible
                        </option>
                        <option value="7">Beauty &amp; Health
                        </option>
                        <option value="8">Furniture Home &amp; Office
                        </option>
                    </select>
                </div>
            </div>
            <button id="btn-search" type="submit" className="button button-primary fas fa-search" />
        </form>
    );
};

export default SearchForm;
