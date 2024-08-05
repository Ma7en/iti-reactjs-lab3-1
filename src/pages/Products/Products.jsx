/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import Product from "./Product/Product";

function Products() {
    return (
        <>
            <div className="products">
                <div className="container">
                    <div className="row gap-3">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
