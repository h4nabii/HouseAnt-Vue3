function generateAxiosConfig(method, url, data, withCredentials) {
    return {
        method: method,
        url: url,
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        withCredentials: withCredentials,
        data: data
    };
}

let dev = true;

let entries = {
    login: "/user/login",
    logout: "/user/logout",

};

export default {
    dev: false,
    houseantURL: "http://111.231.2.157:8080",
    localURL: "http://localhost:8080",
    axiosConfig: generateAxiosConfig,
};
