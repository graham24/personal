import axios from "axios";

const userGet =  axios.create({
    baseURL: "https://api.github.com/users"
})

const readmeGet =  axios.create({
    baseURL: "https://raw.githubusercontent.com/",
    headers: {
        'Accept': 'application/vnd.github.v3.html'
    }
})

export {
    userGet,
    readmeGet
}