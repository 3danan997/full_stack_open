import axios from "axios";
const baseURL = "https://phonebook-backend-95se.onrender.com/api/persons";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const create = (person) => {  
  const request = axios.post(baseURL, person);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then(() => id);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, update };
