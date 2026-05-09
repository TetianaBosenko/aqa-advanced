import axios from 'axios';

export const fetchWithCustomConfig = async (url, headers, params) => {
    const response = await axios.get(url, { headers, params });
    return response.data;
};
