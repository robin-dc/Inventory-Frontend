import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

class Api{
    constructor(){
        this.config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    // Add new item
    async additem(item){
        try {
            const response = await axios.post('/items', item)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // Get ALL items
    async getItems(){
        try {
            const response = await axios.get('/items')
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // Get SINGLE item
    async getItem(id){
        try {
            const response = await axios.get(`/items/${id}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // Delete item
    async deleteItem(id){
        try {
            const response = await axios.delete(`/items/${id}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // Edit item
    async editItem(id, item){
        try {
            const response = await axios.patch(`/items/${id}`, item)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async addUser(user){
        try {
            const response = await axios.post('/signup', user)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async getUser(user){
        try {
            const response = await axios.get('/users', user)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async editUser(user){
        try {
            const response = await axios.patch('/users', user)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteUser(user){
        try {
            const response = await axios.delete('/users', user)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async login(user){
        try {
            const response = await axios.post('/login', user)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async logout(){
        try {
            const response = await axios.post('/logout')
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default new Api()
