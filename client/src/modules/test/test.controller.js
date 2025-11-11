const TestController = {};
const ENV = import.meta.env;

const API_URL = `http://${ENV.API_HOST}:${ENV.API_PORT}${ENV.API_BASE}/test`;

TestController.callToAPI = async () => {
    await fetch(`${API_URL}/test`), {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }
    }.then(response => response,json()).then(result =>{
        console.log(result);

    }).catch(console.log);
}

export default TestController;