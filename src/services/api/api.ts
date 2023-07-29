import axios from 'axios';
const api_key = 'dffba9561ac155546bdd3246e565be42';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZiYTk1NjFhYzE1NTU0NmJkZDMyNDZlNTY1YmU0MiIsInN1YiI6IjY0YzUzOWFmY2FkYjZiMDEwNjZjZDg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GUaGt11MNr3niLtvA0EkLsM-GZff4bL8NNmNxjkLeZM';

const BASE_URL = 'https://api.themoviedb.org';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

const handleResponse = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(response.data.message || 'Something went wrong!');
  }
};

const handleError = (error: any) => {
  throw error;
};

export const Get = async (url: string, params = {api_key}) => {
  try {
    const response = await axiosInstance.get(url, {params});
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const Post = async (url: string, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const Put = async (url: string, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const Delete = async (url: string, params = {}) => {
  try {
    const response = await axiosInstance.delete(url, {params});
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
