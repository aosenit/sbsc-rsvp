import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
}

export interface ApiError {
  status: number;
  message: string;
}

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// Create an Axios instance with baseURL
export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// *Create an Axios instance with baseURL for multipart/form-data
export const axiosInstanceFormData = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//clear user
let unauthorizedNotificationShown = false;
// Interceptor to attach access token to requests
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// *Interceptor to attach access token to requests for multipart/form-data
axiosInstanceFormData.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common error cases
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    // Simply return the response if successful
    return response;
  },
  (error: AxiosError<ApiError>) => {
    // Handle specific status codes

    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Bad Request: Please check your input.");

          break;

        case 401:
          if (!unauthorizedNotificationShown) {
            console.error("Unauthorized: Please log in again.");
            unauthorizedNotificationShown = true;

            // Clear the user and redirect to login
          }
          break;

        case 403:
          console.error("Forbidden: You do not have access to this resource.");

          break;

        case 404:
          console.error("Not Found: The resource was not found.");

          break;
        case 500:
          console.error(
            "Internal Server Error: Something went wrong on the server."
          );

          break;
        default:
          console.error("An unexpected error occurred:", error.message);
      }
    } else {
      console.error("Network error or server is unreachable.");
    }

    return Promise.reject(error);
  }
);

// *Response interceptor for handling common error cases for multipart/form-data
axiosInstanceFormData.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    // Simply return the response if successful
    return response;
  },
  (error: AxiosError<ApiError>) => {
    // Handle specific status codes

    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Bad Request: Please check your input.");

          break;

        case 401:
          if (!unauthorizedNotificationShown) {
            console.error("Unauthorized: Please log in again.");
            unauthorizedNotificationShown = true;

            // Clear the user
          }
          break;

        case 403:
          console.error("Forbidden: You do not have access to this resource.");

          break;

        case 404:
          console.error("Not Found: The resource was not found.");

          break;
        case 500:
          console.error(
            "Internal Server Error: Something went wrong on the server."
          );

          break;
        default:
          console.error("An unexpected error occurred:", error.message);
      }
    } else {
      console.error("Network error or server is unreachable.");
    }

    return Promise.reject(error);
  }
);
