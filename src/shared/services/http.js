import axios from 'axios';

/**
 * The base URL for the API, read from environment variables (Vite).
 * Falls back to a local development server URL if not set.
 * @type {string}
 */
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * A pre-configured Axios instance for making API requests.
 * It includes the base URL and interceptors for handling requests and responses globally.
 */
const http = axios.create({ baseURL });

// Request interceptor: This function runs before each request is sent.
// It's a good place to add authentication tokens or other headers.
http.interceptors.request.use((config) => {
  // Example: Attach an authentication token if it exists.
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

// Response interceptor: This function runs for each response received.
// It's used here to normalize error messages.
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Normalize the error structure to provide a consistent `friendlyMessage`.
    // This makes error handling in components more predictable.
    error.friendlyMessage =
      error.response?.data?.message || error.message || 'An unexpected error occurred.';
    return Promise.reject(error);
  },
);

export default http;