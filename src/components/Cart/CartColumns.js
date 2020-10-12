import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid my-3 text-center d-none d-lg-block text-info text-muted">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <h5>Products</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Name of Product</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Price</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Quantity</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Remove Item</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Total</h5>
        </div>
      </div>
    </div>
  );
}
