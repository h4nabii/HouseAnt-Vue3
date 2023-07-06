import axios from "axios";

export default function newAxios() {
    return {
        method: "get",
        credentials: false,
        ifDev: false,
        entry: "/",
        data: null,

        isPost() {
            this.method = "post";
            return this;
        },
        isGet() {
            this.method = "get";
            return this;
        },
        isDev() {
            this.ifDev = true;
            return this;
        },
        withCredentials() {
            this.credentials = true;
            return this;
        },
        setEntry(entry) {
            this.entry = entry;
            return this;
        },
        setData(data) {
            this.data = data;
            return this;
        },
        send() {
            return axios({
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                method: this.method,
                url: (this.ifDev ? "http://localhost:8080" : "http://111.231.2.157:8080") + this.entry,
                withCredentials: this.credentials,
                data: this.data
            });
        }
    };
}
