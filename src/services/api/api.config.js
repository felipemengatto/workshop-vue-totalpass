import axios from 'axios';

export const extractData = ({ data }) => data;

export default axios.create({
    baseURL: '',
});
