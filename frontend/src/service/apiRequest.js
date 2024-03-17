import axios from "~/service/initAxios.js"

const apiLogin = {
    prefix: "api/auth/v1",
    handleLogin: function (data) {
        return axios.post(`${this.prefix}/login`, {
            email: data.email,
            password: data.password,
        })
    }
}


export default {
    apiLogin,
}