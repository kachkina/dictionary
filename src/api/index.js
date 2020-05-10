const API_URL = 'http://127.0.0.1:8001/api';

export const register = async (email, password) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const body = JSON.stringify({ email, password });
    return fetch(`${API_URL}/user/register`, { method: 'POST', headers, body });
}

export const login = async (email, password) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const body = JSON.stringify({ email, password });
    return fetch(`${API_URL}/user/login`, { method: 'POST', headers, body }).then(() => {
    });
}

export const getUser = async () => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return fetch(`${API_URL}/user/status`, { method: 'GET', headers });
}