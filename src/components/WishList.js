import React,{Fragment} from 'react'

function WishList() {
    return (
        <Fragment>
            <div className="page-wishlist u-s-p-t-80">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    {/* Products-List-Wrapper */}
                    <div className="table-wrapper u-s-m-b-60">
                        <table>
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Stock Status</th>
                            <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <div className="cart-anchor-image">
                                <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Casual Hoodie Full Cotton</h6>
                                </a>
                                </div>
                            </td>
                            <td>
                                <div className="cart-price">
                                $55.00
                                </div>
                            </td>
                            <td>
                                <div className="cart-stock">
                                In Stock
                                </div>
                            </td>
                            <td>
                                <div className="action-wrapper">
                                <button className="button button-outline-secondary">Add to Cart</button>
                                <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="cart-anchor-image">
                                <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Black Rock Dress with High Jewelery Necklace</h6>
                                </a>
                                </div>
                            </td>
                            <td>
                                <div className="cart-price">
                                $55.00
                                </div>
                            </td>
                            <td>
                                <div className="cart-stock">
                                In Stock
                                </div>
                            </td>
                            <td>
                                <div className="action-wrapper">
                                <button className="button button-outline-secondary">Add to Cart</button>
                                <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="cart-anchor-image">
                                <a href="single-product.html">
                                    <img src="images/product/product@1x.jpg" alt="Product" />
                                    <h6>Xiaomi Note 2 Black Color</h6>
                                </a>
                                </div>
                            </td>
                            <td>
                                <div className="cart-price">
                                $55.00
                                </div>
                            </td>
                            <td>
                                <div className="cart-stock">
                                In Stock
                                </div>
                            </td>
                            <td>
                                <div className="action-wrapper">
                                <button className="button button-outline-secondary">Add to Cart</button>
                                <button className="button button-outline-secondary fas fa-trash" />
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    {/* Products-List-Wrapper /- */}
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WishList
