import validateLogin from "@/assets/validators/userPassValidator";
import newAxios from "@/assets/axois/axoisGen";

export default {
    user: {
        async autoLogin() {
            let resp = await newAxios()
                .setEntry("/")
                .withCredentials()
                .send();

            return {
                success: resp.data["auto-login"],
                account: resp.data.account
            };
        },

        async login(account, password) {
            let resp = await newAxios()
                .isPost()
                .withCredentials()
                .setData({
                    account: account,
                    password: password
                })
                .setEntry("/user/login")
                .send();

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
                .setEntry("/user/register")
                .setData({
                    account: account,
                    password: password
                })
                .isPost()
                .withCredentials()
                .send();

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
                .send();

            if (resp.data.message === "Successfully update userIfo") {
                return {
                    success: true,
                    keep: resp.keep,
                    message: resp.data.message
                };
            } else {
                return {
                    success: false,
                    message: resp.data.message
                };
            }
        },

        async getBrowseData() {
            let resp = await newAxios()
                .setEntry("/user/findAllHouseInfo")
                .send();

            return {
                houses: resp.data.result
            };
        }
    },
    customer: {
        async createReservation(reservation) {
            console.log(reservation);

            let resp = await newAxios()
                .setEntry("/customer/addReservation")
                .isPost()
                .withCredentials()
                .setData(reservation)
                .send();

            return {
                message: resp.data
            };
        },

        async updateReservation(reservation) {
            let resp = await newAxios()
                .setEntry("/customer/updateReservationInfo")
                .isPost()
                .withCredentials()
                .setData(reservation)
                .send();

            return {
                message: resp.data
            };
        },

        async deleteReservation(id) {
            let resp = await newAxios()
                .setEntry("/customer/deleteReservation")
                .isDelete()
                .withCredentials()
                .setParams({
                    id: id
                })
                .send();

            return {
                message: resp.data
            };
        },

        async getMyReservations() {
            let resp = await newAxios()
                .setEntry("/user/myReservationInfo")
                .withCredentials()
                .send();

            return {
                reservations: resp.data.result
            };
        }
    },
    houseOwner: {
        async createHouse(house) {
            let resp = await newAxios()
                .setEntry("/house/addHouseInfo")
                .isPost()
                .withCredentials()
                .setData(house)
                .send();

            return {
                message: resp.data
            };
        },

        async updateHouse(house) {
            let resp = await newAxios()
                .setEntry("/house/updateHouseInfo")
                .isPost()
                .withCredentials()
                .setData(house)
                .send();

            return {
                message: resp.data
            };
        },

        async deleteHouse(id) {
            let resp = await newAxios()
                .setEntry("/house/deleteHouseInfo")
                .isDelete()
                .withCredentials()
                .setParams({
                    id: id
                })
                .send();

            return {
                message: resp.data
            };
        },

        async getMyHouses() {
            let resp = await newAxios()
                .setEntry("/user/myHouseInfo")
                .withCredentials()
                .send();

            return {
                houses: resp.data.result
            };
        }
    }
};
