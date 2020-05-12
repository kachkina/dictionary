const API_URL = 'http://dictionary.com:8001/api';

export const register = async (email, password) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const body = JSON.stringify({ email, password });
    return fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers,
        body,
    }).then(response => response.json());
}

export const login = async (email, password) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const body = JSON.stringify({ email, password });
    return fetch(`${API_URL}/user/login`, { method: 'POST', headers, body, credentials: 'include' }).then(response => response.json());
}

export const getUser = async () => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return fetch(`${API_URL}/user/status`, { method: 'GET', headers, credentials: 'include' }).then(response => response.json());
}

export const addWord = async (text) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const body = JSON.stringify({ text });
    return fetch(`${API_URL}/word/add`, { method: 'POST', headers, body, credentials: 'include' }).then(response => response.json());
}

export const getWords = async (type) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return fetch(`${API_URL}/word/get?type=${type}`, { method: 'GET', headers, credentials: 'include' }).then(response => response.json());
}

export const upadteWord = async (word) => {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const body = JSON.stringify(word);
    return fetch(`${API_URL}/word/update`, { method: 'PATCH', headers, body, credentials: 'include' }).then(response => response.json());
}