import axios from 'axios';
import { URL_API_GITHUB } from './config';

const api = axios.create({
  baseURL: URL_API_GITHUB,
});

export default api;
