let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {
	backendHost = 'http://localhost:3001';
}
else {
	backendHost = 'https://cuntrucdemalade-api.herokuapp.com';
}

export const API_ROOT = `${backendHost}/api/`;
