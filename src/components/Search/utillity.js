import axios from 'axios';

export default async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos/1');
}