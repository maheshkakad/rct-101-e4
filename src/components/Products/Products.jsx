import React from "react";
import { useState } from "react";
import Product from "./Product/Product"

const Products = (dispatch) => {
  const [pro , setPro] = useState({});
  axios.get("http://localhost:8080/products").then((r) => {
    setPro(r.data)
        dispatch({ type: GET_PRODUCTS_SUCCESS , payload:r.data })
    }).catch(() => {
        dispatch({ type: GET_PRODUCTS_ERROR })
    })

  return <div>
    <Product data={pro} />
  </div>;
};

export default Products;
