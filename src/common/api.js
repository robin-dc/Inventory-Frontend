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

    // ITEMS SCHEMA //
    // model: {
    //     type: String,
    //     required: true
    // },
    // condition: {
    //     type: String,
    //     required: true
    // },
    // assignedTo: {
    //     type: String,
    //     required: true
    // },
    // dateAssigned: {
    //     type: Date,
    //     required: true
    // },
    // dateReturned: {
    //     type: Date
    // },
    // location: {
    //     type: String
    // },
    // lastInspection: {
    //     type: Date
    // }

    // USERS SCHEMA //
    // name: {
    //     type: String,
    //  
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // role: {
    //     type: String,
    //     default: 'faculty'
    // },

    // HISTORIES SCHEMA //
    // action: {
    //     type: String,
    //     required: true
    // },
    // performedBy: {
    //     type: String,
    //     required: true
    // },
    // datePerformed: {
    //     type: Date,
    //     required: true
    // },
    // itemId: {
    //     type: String,
    //     required: true
    // }

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
            const response = await axios.post('/login', user, { withCredentials: true })
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

    async checkAuth(){
        try {
            const response = await axios.get('/check-auth', { withCredentials: true })
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async addHistory(items){
        try {
            const response = await axios.post('/history', items)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async getHistory(){
        try {
            const response = await axios.get('/history')
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async getHistoryById(id){
        try {
            const response = await axios.get(`/history/${id}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteHistory(id){
        try {
            const response = await axios.delete(`/history/${id}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default new Api()
