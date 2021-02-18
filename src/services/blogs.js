import axios from 'axios'
const baseUrl = '/api/blogs'

let token = '';

const setToken = (tok) => token = `bearer ${tok}`;

const getAll = async () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addBlog = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log(config);

  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
}

export default { getAll, setToken, addBlog }