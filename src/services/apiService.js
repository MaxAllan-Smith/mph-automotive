import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://mph-automotive-api-dweycjggbxe3avap.uksouth-01.azurewebsites.net/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor: attach token
apiClient.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// Response interceptor: handle responses
apiClient.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    if (error.response) {
      const { status } = error.response

      if (status === 401) {
        console.warn('Unauthorized! You may need to log in again.')
        localStorage.removeItem('accessToken')
        window.location.href = '/login'
      }

      if (status === 403) {
        console.warn('Forbidden! You do not have access.')
      }
    }

    return Promise.reject(error)
  },
)

// Exported HTTP methods
export async function get(url, config = {}) {
  return apiClient.get(url, config)
}

export async function post(url, data = {}, config = {}) {
  return apiClient.post(url, data, config)
}

export async function put(url, data = {}, config = {}) {
  return apiClient.put(url, data, config)
}

export async function del(url, config = {}) {
  return apiClient.delete(url, config)
}

export default apiClient
