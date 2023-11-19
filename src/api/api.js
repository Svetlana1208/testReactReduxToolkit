import axios from "axios";

export const fetchUsers = async() => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users.data;
}