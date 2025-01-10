import axios from 'axios';

export const base_url = process.env.NEXT_PUBLIC_API_BASE_URL
//export const base_url = "http://localhost:8000"
const apiClient = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getRequest = async (endpoint, params = {}, headers = {}) => {
    try {
        const response = await apiClient.get(endpoint, {
            params,
            headers,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle POST requests
export const postRequest = async (endpoint, data, headers = {}) => {
    try {
        const response = await apiClient.post(endpoint, data, {
            headers,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const putRequest = async (endpoint, data, headers = {}) => {
    try {
        const response = await apiClient.put(endpoint, data, {
            headers,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const deleteRequest = async (endpoint, headers = {}) => {
    try {
        const response = await apiClient.delete(endpoint, {
            headers,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const handleError = (error) => {
    if (error.response) {
        console.log('Error response:------>', error.response);
    } else if (error.request) {
        console.log('Error request:-------->', error.request);
    } else {
        console.log('Error message:-------->', error.message);
    }
    throw error;
};
