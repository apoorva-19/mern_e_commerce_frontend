import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowPhoto";

const Card = ({ product }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center border-dark h-100">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="products" />
          <p>{product.description}</p>
          <p>₹{product.price}</p>
          <Link to="/">
            <button className="btn btn-dark mt-2 mb-2">View Product</button>
          </Link>
          <button className="btn btn-outline-primary mt-2 mb-2 ml-3">
            Add Product to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
