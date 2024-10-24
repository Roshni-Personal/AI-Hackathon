// src/services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; // Change this to your actual backend URL

export const getProductAnalytics = async (productId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/${productId}/analytics`
    );
    return response.data; // Return the analytics data from the response
  } catch (error) {
    console.error("Error fetching product analytics:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};
