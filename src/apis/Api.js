import axios from "axios";

// creating an instance of axios

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//creating test api

export const testApi = Api.get("/test");
