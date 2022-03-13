/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import CheckOutPage from '../pages/CheckOutPage';
import ExclusiveDealsPage from '../pages/ExclusiveDealsPage';
import FlashDealsPage from '../pages/FlashDealsPage';
import HomePage from '../pages/HomePage';
import LoginRegisterPage from '../pages/LoginRegisterPage';
import LostPasswordPage from '../pages/LostPasswordPage';
import NewArrivalsPage from '../pages/NewArrivalsPage';
import NotFoundPage from '../pages/NotFoundPage';
import SearchResultPage from '../pages/SearchResultPage';
import SingleProductPage from '../pages/SingleProductPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import SubCategoryUnderSubCategoryPage from '../pages/SubCategoryUnderSubCategoryPage';
import SuperSalePage from '../pages/SuperSalePage';
import WhishListPage from '../pages/WhishListPage';
import SingleBrandPage from "../pages/SingleBrandPage";
import PrivateOutlet from "./PrivateOutlet";
import ResetPasswordPage from "../pages/ResetPasswordPage";


function AppRoute() {
    return (
        <Fragment>
             <Routes>

                <Route  path="/" element={<HomePage  key={Date.now()} />} />
                <Route  path="/singleProduct/:productID" element={<SingleProductPage />} />
                <Route exact  path="category/:categoryId" element={<CategoryPage />} />
                <Route  path="/:catId/:subCatId" element={<SubCategoryPage />} />
                <Route  path="/:categoryName/:subCategoryName/:subCategoryName" element={<SubCategoryUnderSubCategoryPage />} /> //not use

                //Authentication Route
                <Route path="/authentication/*" element={<PrivateOutlet />}>
                   <Route  path="wishlist" element={<WhishListPage />} />
                   <Route  path="cart" element={<CartPage />} />
                   <Route  path="checkout" element={<CheckOutPage />} />
                </Route>



                <Route  path="/search-result" element={<SearchResultPage />} />

                <Route  path="/login" element={<LoginRegisterPage />} />
                <Route  path="/lost-password" element={<LostPasswordPage />} />
                <Route  path="/reset-password/*" element={<ResetPasswordPage />} />


                <Route  path="/single-brand/:brandId" element={<SingleBrandPage />} />
                <Route  path="/new-arrivals" element={<NewArrivalsPage />} />
                <Route  path="/exclusive-deals" element={<ExclusiveDealsPage />} />
                <Route  path="/flash-deals" element={<FlashDealsPage />} />
                <Route  path="/super-sale" element={<SuperSalePage />} />


                <Route path="/*" element={<NotFoundPage/> } />
            </Routes>
        </Fragment>
    )
}

export default AppRoute
