import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://react-test.aventusinformatics.com/api",
  withCredentials: false,
});