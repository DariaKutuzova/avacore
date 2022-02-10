export const API_URL = '/list.json'

function handleResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status)
}

export function getOrganizations() {
    return fetch(`${API_URL}`, {
        method: 'GET',
        // headers: {
        //     'Accept': 'application/json',
        //     "Content-Type": "application/json"
        // }
    })
        .then(handleResponse)
}
