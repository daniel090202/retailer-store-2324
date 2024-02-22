import axios from "axios";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
});

const get = async (url: string, options: object = {}) => {
  const response = await request.get(url, options);

  return response.data;
};

const post = async (url: string, options: object = {}) => {
  const response = await request.post(url, options);

  return response;
};

const patch = async (url: string, options: object = {}) => {
  const response = await request.patch(url, options);

  return response;
};

export { get, post, patch };
export default request;
