import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/mainpost'

const getAll = () => {
    return axios.get(baseUrl)
}

const getOne = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePost = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, getOne, create, update, deletePost }