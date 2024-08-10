// src/utils/httpClient.js
import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:1738/api", // Adjust to match your Node.js backend
  timeout: 5000, // Request timeout (5 seconds)
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    // Add additional headers if required
  },
});

// Request interceptor
httpClient.interceptors.request.use(
  (config) => {
    // Modify config before the request is sent
    console.log("Request made with", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
httpClient.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx will trigger this function
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx trigger this function
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
