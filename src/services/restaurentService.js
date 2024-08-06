import axios from 'axios';

const API_URL = '/api/restaurants';

export const getRestaurants = () => axios.get(API_URL);
export const getRestaurant = (id) => axios.get(`${API_URL}/${id}`);
export const addRestaurant = (data) => axios.post(API_URL, data);
export const editRestaurant = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteRestaurant = (id) => axios.delete(`${API_URL}/${id}`);
