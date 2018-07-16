import axios from 'axios';

export const GET_RESTAURANTS = 'GET_RESTAURANTS';

// queries the api with a city name as a parameter and returns the list of restaurants 
// in that city
export function getRestaurants(city) {
    const URL = `http://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`;
    const request = axios.get(URL);

    return {
        type: GET_RESTAURANTS,
        payload: request
    };
}