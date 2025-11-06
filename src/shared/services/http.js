// Axios instance: baseURL from env (Vite) with sane fallback.
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const http = axios.create({ baseURL })

// Interceptors can attach tokens, log, transform, etc.
http.interceptors.request.use((config) => {
  // Example: attach token if you ever add auth
  // const token = localStorage.getItem('token')
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptors.response.use(
  (r) => r,
  (err) => {
    // Basic error normalization
    err.friendlyMessage = err.response?.data?.message || err.message || 'Unexpected error'
    return Promise.reject(err)
  }
)

export default http
