class Api {
    constructor (baseURL) {
        this._baseURL = baseURL;
    }
    _handleOriginalResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
    }
    createNewUser(username, firstName, lastName, password) {
        return fetch(`${this._baseURL}/auth/register_user`, {
            method: "POST",
            body: JSON.stringify({
                username,
                firstName,
                lastName,
                password,
            })
        })
        .then((res) => {
            return this._handleOriginalResponse(res);
        })
        .then((res) => {
            return res;
        })
    }
    loginUser (username, password) {
        return fetch(`${this._baseURL}/auth/attempt_login`, {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            })
        })
        .then((res) => {
            return this._handleOriginalResponse(res);
        })
        .then((res) => {
            return res;
        })
    } 
    createUserParty (name, desc, date, coordinates, location_main, location_add, price, age) {
        return fetch(`${this._baseURL}/party/create_party`, {
            method: "POST",
            body: JSON.stringify({
                name,
                desc,
                date,
                coordinates,
                location_main,
                location_add,
                price,
                age,
            })
        })
        .then((res) => {
            return this._handleOriginalResponse(res);
        })
        .then((res) => {
            return res;
        })
    }
    getAllParties () {
        return fetch(`${this._baseURL}/party/get_all_parties`)
        .then((res) => {
            return this._handleOriginalResponse(res);
        })
        .then((res) => {
            return res;
        })
    }
}

const api = new Api('https://partymakers-api.herokuapp.com');

export default api;