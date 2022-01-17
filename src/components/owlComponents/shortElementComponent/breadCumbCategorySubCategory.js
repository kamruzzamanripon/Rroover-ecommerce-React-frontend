import React from 'react';

const BreadCumbCategorySubCategory = ({category_info, subcategory_info}) => {
    return (
        <ul className="bread-crumb">
            <li className="has-separator">
                <a href="shop-v1-root-category.html">{category_info ? category_info.name : ""}</a>
            </li>
            <li className="has-separator">
                <a href="shop-v2-sub-category.html">{subcategory_info ? subcategory_info.name : ""}</a>
            </li>

        </ul>
    );
};

export default BreadCumbCategorySubCategory;
