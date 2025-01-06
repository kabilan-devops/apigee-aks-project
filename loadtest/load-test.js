import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100 }, // Ramp-up to 100 virtual users over 1 minute
        { duration: '3m', target: 100 }, // Maintain 100 virtual users for 3 minutes
        { duration: '1m', target: 0 },   // Ramp-down to 0 virtual users over 1 minute
    ],
};

const ACCESS_TOKEN = 'fC94lp5AsirpxDVWLBWaF28vaUmR'; // Replace with your actual access token
const API_PROXY_URL = 'https://34.8.179.27.nip.io/project1-aks-logs'; // Replace with your proxy URL

export default function () {
    let headers = {
        Authorization: `Bearer ${ACCESS_TOKEN}`, // Adding the Bearer token for authentication
    };

    let res = http.get(API_PROXY_URL, { headers }); // Sending a GET request to the proxy URL
    check(res, {
        'status is 200': (r) => r.status === 200, // Check if the response status is 200
    });
    sleep(1); // Pause for 1 second between requests
}


