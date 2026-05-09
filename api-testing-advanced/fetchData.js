import axios from 'axios';

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('Resource not found', { cause: error });
        } else {
            throw error;
        }
    }
};
