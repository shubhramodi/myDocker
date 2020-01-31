import axios from 'axios';
import {toast} from 'react-toastify';

const httpClient = axios.create();
httpClient.defaults.timeout = 5 * 60 * 1000;

export function POST(url, payload = {}, config) {
    return httpClient.post(url, payload, config).catch(function (error) {
        if (!error.response) {
            toast.error('There is no Internet connection', {position: toast.POSITION.TOP_CENTER});
        } else {
            toast.error(httpResponseObject[error.response.status], {position: toast.POSITION.TOP_CENTER});
        }
    });
}

export function GET(url, config) {
    return httpClient.get(url, config).catch(function (error) {
        if (!error.response) {
            toast.error('There is no Internet connection', {position: toast.POSITION.TOP_CENTER});
        } else {
            toast.error(httpResponseObject[error.response.status], {position: toast.POSITION.TOP_CENTER});
        }
    });
}

const httpResponseObject = {
    400: 'The request contained an error.',
    401: 'Access was denied. You may have entered your credentials incorrectly, or you might not have access to the requested resource or operation.',
    403: 'The request is for something forbidden. Authorization will not help.',
    404: 'The requested resource was not found.',
    500: 'Your request could not be completed because there was a problem with the service.',
    502: 'Your request could not be completed because there was a problem with the service.',
    503: "There's a problem with the service right now. Please try again later.",
    504: "There's a problem with the service right now. Gateway Time-out."
};

export const API_URL = () => process.env.API_URL === '/rest' ? '/rest' : process.env.API_URL.indexOf('http') === -1 ? `https://${process.env.API_URL}/rest` : `${process.env.API_URL}/rest`;
export const GET_PERSON_LIST_URL = `${API_URL()}/person/list`;