import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'd29e4cd4b2msheb0de0024462301p1bcd0ajsn33c217ca366c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}