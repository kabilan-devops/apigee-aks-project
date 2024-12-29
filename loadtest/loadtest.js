import http from 'k6/http';

export let options = {
    scenarios: {
        bulk_requests: {
            executor: 'shared-iterations',
            vus: 10, // 100 virtual users
            iterations: 50, // Total 3000 requests
            maxDuration: '1m', // Complete test within 1 minute
        },
    },
};

export default function () {
    let res = http.get('https://34.8.179.27.nip.io/project-aks-logs');
    
    // Log status and response
    console.log(`Status: ${res.status}, Response: ${res.body}`);
}


