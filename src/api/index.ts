import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '/mock/mockdata.json',
};

const apiClient = axios.create(config);

export default apiClient;
