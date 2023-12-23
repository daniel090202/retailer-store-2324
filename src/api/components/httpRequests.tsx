import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (url: string, options: object = {}) => {
  const response = await request.get(url, options);

  return response.data;
};

export { get };
export default request;
