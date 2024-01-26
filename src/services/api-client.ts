import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '402a210b45d943f1a516e010e73a8dc8'
    }
})