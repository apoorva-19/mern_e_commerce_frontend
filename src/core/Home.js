import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout
      title="Your one-stop-shop for all programming essentials!"
      description="Let the fun begin!"
    >
      <div className="container">
        <h2 className="mb-4 pl-4 pt-3 pb-3 layout-header">Best Sellers</h2>
        <div className="row">
          {productsBySell.map((product, i) => (
            <Card key={i} product={product}></Card>
          ))}
        </div>
        <h2 className="mb-4 pl-4 pt-3 pb-3 mt-5 layout-header">
          Newest Arrivals
        </h2>
        <div className="row">
          {productsByArrival.map((product, i) => (
            <Card key={i} product={product}></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
