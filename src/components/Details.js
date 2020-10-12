import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5">
                  <h1>{title} </h1>
                </div>
              </div>
              {/* End of Title */}
              {/* Product Information */}
              <div className="row">
                {/* Product Image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model : {title}</h2>
                  <h4 className="text-madeby text-muted mt-3 mb-2">
                    Made By : {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong>Price: ${price}</strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    Some Info about Product:
                  </p>
                  <p className="text-info text-muted lead">{info} </p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* End of Product Information */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
