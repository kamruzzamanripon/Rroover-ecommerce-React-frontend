import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import BlogSinglePage from '../pages/BlogSinglePage';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import CheckOutPage from '../pages/CheckOutPage';
import ContactPage from '../pages/ContactPage';
import DirectoryPage from '../pages/DirectoryPage';
import ExclusiveDealsPage from '../pages/ExclusiveDealsPage';
import FaqPage from '../pages/FaqPage';
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
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage';
import TrackOrderPage from '../pages/TrackOrderPage';
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

                <Route path="/authentication/*" element={<PrivateOutlet />}>
                   <Route  path="wishlist" element={<WhishListPage />} />
                   <Route  path="cart" element={<CartPage />} />
                </Route>


                <Route  path="/checkout" element={<CheckOutPage />} />
                {/*<Route  path="/wishlist" element={<WhishListPage />} />*/}
                <Route  path="/search-result" element={<SearchResultPage />} />

                <Route  path="/login" element={<LoginRegisterPage />} />
                <Route  path="/lost-password" element={<LostPasswordPage />} />
                <Route  path="/reset-password/*" element={<ResetPasswordPage />} />

                <Route  path="/single-brand/:brandId" element={<SingleBrandPage />} />
                <Route  path="/new-arrivals" element={<NewArrivalsPage />} />
                <Route  path="/exclusive-deals" element={<ExclusiveDealsPage />} />
                <Route  path="/flash-deals" element={<FlashDealsPage />} />
                <Route  path="/super-sale" element={<SuperSalePage />} />

                <Route  path="/blog/*" element={<BlogPage />} />
                <Route  path="/blog/single" element={<BlogSinglePage />} />

                <Route  path="/directory" element={<DirectoryPage />} />
                <Route  path="/terms-conditions" element={<TermsAndConditionsPage />} />
                <Route  path="/track-order" element={<TrackOrderPage />} />
                <Route  path="/faq" element={<FaqPage />} />
                <Route  path="/about" element={<AboutPage />} />
                <Route  path="/contact" element={<ContactPage />} />

                <Route path="/*" element={<NotFoundPage/> } />
            </Routes>
        </Fragment>
    )
}

export default AppRoute
