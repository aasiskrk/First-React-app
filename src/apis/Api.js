import axios from "axios";

// creating an instance of axios

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//creating anuthorization configureation
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

//creating test api

export const testApi = () => Api.get("/test");

//creating register api

export const registerUserApi = (data) => Api.post("/api/user/create", data);

//creating login api
export const loginUserApi = (data) => Api.post("/api/user/login", data);

export const createProductApi = (data) => Api.post("/api/product/create", data);

export const getAllProducts = () =>
  Api.get("/api/product/get_all_products", config);

export const getSingleProduct = (id) =>
  Api.get(`/api/product/get_single_product/${id}`, config);

export const deleteProduct = (id) =>
  Api.delete(`/api/product/delete_product/${id}`);

export const updateProduct = (id) =>
  Api.put(`/api/product/update_product/${id}`);
