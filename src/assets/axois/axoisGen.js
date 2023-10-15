import axios from "axios";

export default function newAxios() {
    return {
        method: "get",
        credentials: false,
        entry: "/",
        data: null,
        params: {},

        isPost() {
            this.method = "post";
            return this;
        },
        isGet() {
            this.method = "get";
            return this;
        },
        isDelete() {
            this.method = "delete";
            return this;
        },
        isUpdate() {
            this.method = "update";
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
        setParams(params) {
            this.params = params;
            return this;
        },
        send() {
            let url = (import.meta.env.PROD ?
                    "https://h4nabii.hyhyzz.top/house-ant" :
                    "http://localhost:8080"
            ) + this.entry;

            if (Object.entries(this.params).length) {
                url += "?" + [...Object.entries(this.params)]
                    .map(([key, value]) => {
                        return `${key}=${value}`;
                    })
                    .join("&");
            }

            return axios({
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                },
                method: this.method,
                url: url,
                withCredentials: this.credentials,
                data: this.data,
            });
        },
    };
}
