import "whatwg-fetch"; // polyfill window.fetch
import omit from "lodash/object/omit";
import map  from "lodash/collection/map";

// Alter the behavior of the native "fetch" to add the following:
// 1) Send cookies by default.
// 2) Auto-parse JSON responses.
// 3) Reject the promise on a 404 or 500. By default, fetch does not do this.

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

const parseJSON = (response) => {
    try {
        return response.json();
    } catch(e) {
        const error = new Error("Error parsing JSON");
        error.response = response;
        throw error;
    }
};

export default (endpoint, params={}) => {
    const request = {
        credentials: "same-origin",
        headers: {
            "Accept": "application/json, text/javascript, */*",
        },
        body: params.body ? map(params.body || {}, (v, k) => `${k}=${v}`).join("&") : null,
        ...omit(params, "body"),
    };

    return fetch(endpoint, request)
        .then(checkStatus)
        .then(parseJSON)
};
