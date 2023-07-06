import validateLogin from "@/assets/validators/userPassValidator";
import newAxios from "@/assets/axois/axoisGen";

export default {
    user: {
        async autoLogin() {
            let resp = await newAxios()
                .isDev()
                .setEntry("/")
                .withCredentials()
                .send();

            console.log(resp.data);
            return {
                success: resp.data["auto-login"],
                account: resp.data.account
            };
        },

        async login(account, password) {
            let resp = await newAxios()
                .isDev()
                .isPost()
                .withCredentials()
                .setData({
                    account: account,
                    password: password
                })
                .setEntry("/user/login")
                .send();

            console.log(resp.data);
            if (resp.data.login) {
                return {
                    success: true,
                    account: account
                };
            } else if (resp.data.message === "User not found") {
                return {
                    success: false,
                    newUser: true
                };
            } else {
                return {
                    success: false,
                    error: true,
                    message: resp.data.message
                };
            }
        },

        async register(account, password) {
            if (!validateLogin(account, password)) {
                return {
                    success: false,
                    invalid: true
                };
            }

            let resp = await newAxios()
                .isDev()
                .setEntry("/user/register")
                .setData({
                    account: account,
                    password: password
                })
                .isPost()
                .withCredentials()
                .send();

            console.log(resp.data);
            if (resp.data.success) {
                return {
                    success: true,
                    account: account,
                    message: resp.data.message
                };
            } else {
                return {
                    success: false,
                    error: true,
                    message: resp.data.message
                };
            }
        },

        async logout() {
            let resp = await newAxios()
                .isDev()
                .setEntry("/user/logout")
                .withCredentials()
                .send();

            if (resp.data.logout) {
                return {
                    success: true,
                    message: resp.data.message
                };
            }
        },

        async getInfo() {
            let resp = await newAxios()
                .setEntry("/user/userInfo")
                .isPost()
                .withCredentials()
                .isDev()
                .send();

            if (resp.data.result) {
                return {
                    user: {
                        username: resp.data.result.username,
                        tel: resp.data.result.tel
                    }
                };
            } else {
                return {
                    user: null,
                    error: true,
                    message: resp.data.message
                };
            }
        },

        async updateInfo(username, password, tel) {
            let resp = await newAxios()
                .setEntry("/user/updateUser")
                .setData({
                    username: username,
                    password: password !== "" ? password : null,
                    tel: tel
                })
                .isPost()
                .withCredentials()
                .isDev()
                .send();

            if (resp.data.message === "Successfully update userInfo") {
                return {
                    success: true,
                    message: resp.data.message
                };
            } else {
                return {
                    success: false,
                    message: resp.data.message
                };
            }
        }
    },
    customer: {},
    houseOwner: {}
};
