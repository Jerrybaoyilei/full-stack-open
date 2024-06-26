import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPerson => axios.post(baseUrl, newPerson).then(response => response.data)

const update = (id, newPerson) => axios.put(`${baseUrl}/${id}`, newPerson).then(response => response.data)

const remove = (id) => axios.delete(`${baseUrl}/${id}`)

const updateNumber = (id, newPerson) => axios.put(`${baseUrl}/${id}`, newPerson).then(response => response.data)

export default { getAll, create, update, remove, updateNumber }