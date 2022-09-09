import axios from "axios"
const test = axios.create({
  baseURL: "https://www.google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
