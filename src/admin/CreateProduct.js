import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { createProduct, getCategories } from "./apiAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  //load categories and set form data

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);

    setValues({ ...values, error: "", createdProduct: "", [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    if (category === "") {
      setValues({ ...values, error: "Select category", loading: false });
      console.log(error);
      return;
    }
    if (shipping === "") {
      setValues({
        ...values,
        error: "Select if shipping is needed",
        loading: false,
      });
      console.log(error);
      return;
    }
    setValues({ ...values, error: "", loading: true });
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          photo: "",
          description: "",
          category: "",
          shipping: "",
          price: "",
          quantity: "",
          error: "",
          loading: false,
          createdProduct: data.name,
        });
        console.log(createdProduct);
      }
    });
  };

  const newPostForm = () => {
    return (
      <form className="mb-3" onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
          <label className="btn btn-secondary">
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange("photo")}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            type="text"
            className="form-control"
            value={description}
            onChange={handleChange("description")}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={handleChange("price")}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Category</label>
          <select onChange={handleChange("category")} className="form-control">
            <option>Please select</option>
            {categories.data &&
              categories.data.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label className="text-muted">Needs shipping?</label>
          <select
            className="form-control"
            name="shipping"
            onChange={handleChange("shipping")}
          >
            <option value="">Please select option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-muted">Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={handleChange("quantity")}
          />
        </div>
        <button className="btn btn-outline-primary">Create Product</button>
      </form>
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: createdProduct ? "" : "none" }}
    >
      {`${createdProduct}`} has been added!
    </div>
  );

  const showLoading = () =>
    loading && <div className="alert alert-warning">Loading...</div>;

  return (
    <Layout
      title="Add a new product"
      description={`G'day ${user.name}, ready to add a new product?`}
    >
      <div className="container">
        {showLoading()}
        {showSuccess()}
        {showError()}
        {newPostForm()}
      </div>
    </Layout>
  );
};

export default AddProduct;
