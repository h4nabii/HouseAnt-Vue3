import validateLogin from "@/assets/validators/userPassValidator";
import newAxios from "@/assets/axois/axoisGen";

export default {
  user: {
    async login(username, password) {
      let resp = await newAxios()
        .setEntry("/user/login")
        .isPost()
        .withCredentials()
        .setData({
          username,
          password,
        })
        .send();

      console.log(resp.data);

      if (resp.data["success"]) {
        return {
          success: true,
          username: username,
        };
      } else if (resp.data.error === "User does not exist") {
        return {
          success: false,
          newUser: true,
        };
      } else {
        return {
          success: false,
          error: true,
          message: resp.data.message,
        };
      }
    },

    async register(account, password) {
      if (!validateLogin(account, password)) {
        return {
          success: false,
          invalid: true,
        };
      }

      let resp = await newAxios()
        .setEntry("/user/register")
        .setData({
          username: account,
          password: password,
        })
        .isPost()
        .withCredentials()
        .send();

      console.log(resp.data);

      if (resp.data.success) {
        return {
          success: true,
          account: account,
          message: resp.data.message,
        };
      } else {
        return {
          success: false,
          error: true,
          message: resp.data.message,
        };
      }
    },

    async logout() {
      let resp = await newAxios()
        .setEntry("/user/logout")
        .withCredentials()
        .send();

      if (resp.data.success) {
        return {
          success: true,
          message: resp.data.message,
        };
      }
    },

    async getInfo() {
      let resp = await newAxios()
        .setEntry("/user/get-info")
        .isGet()
        .withCredentials()
        .send();

      if (resp.data) {
        return {
          user: {
            username: resp.data.username,
            access: resp.data.access,
          },
        };
      } else {
        return {
          user: null,
          error: true,
          message: resp.data.message,
        };
      }
    },

    async updateInfo(username, password, tel) {
      let resp = await newAxios()
        .setEntry("/user/update-info")
        .setData({
          username: username,
          password: password !== "" ? password : null,
          tel: tel,
        })
        .isPost()
        .withCredentials()
        .send();

      if (resp.data.message === "Successfully update userIfo") {
        return {
          success: true,
          keep: resp.keep,
          message: resp.data.message,
        };
      } else {
        return {
          success: false,
          message: resp.data.message,
        };
      }
    },

    async getBrowseData(count = 20, page = 1) {
      let resp = await newAxios()
        .setEntry(`/user/get-explore-list?count=${count}&page=${page}`)
        .send();

      return {
        /** @type Array */
        houses: resp.data["houseList"],
      };
    },
  },
  customer: {
    async createReservation(reservation) {
      console.log(reservation);

      let resp = await newAxios()
        .setEntry("/customer/create-reservation")
        .isPost()
        .withCredentials()
        .setData(reservation)
        .send();

      return {
        message: resp.data,
      };
    },

    async updateReservation(reservation) {
      let resp = await newAxios()
        .setEntry("/customer/modify-reservation")
        .isPost()
        .withCredentials()
        .setData(reservation)
        .send();

      return {
        message: resp.data,
      };
    },

    async deleteReservation(id) {
      let resp = await newAxios()
        .setEntry("/customer/cancel-reservation")
        .isDelete()
        .withCredentials()
        .setParams({
          id: id,
        })
        .send();

      return {
        message: resp.data,
      };
    },

    async getMyReservations() {
      let resp = await newAxios()
        .setEntry("/customer/get-reservation-list")
        .withCredentials()
        .send();

      return {
        reservations: resp.data["reservationList"],
      };
    },
  },
  houseOwner: {
    async createHouse(house) {
      let resp = await newAxios()
        .setEntry("/owner/add-house")
        .isPost()
        .withCredentials()
        .setData(house)
        .send();

      return {
        message: resp.data,
      };
    },

    async updateHouse(house) {
      let resp = await newAxios()
        .setEntry("/owner/update-house")
        .isPost()
        .withCredentials()
        .setData(house)
        .send();

      return {
        message: resp.data,
      };
    },

    async deleteHouse(id) {
      let resp = await newAxios()
        .setEntry("/owner/remove-house")
        .isDelete()
        .withCredentials()
        .setParams({
          id: id,
        })
        .send();

      return {
        message: resp.data,
      };
    },

    async getMyHouses() {
      let resp = await newAxios()
        .setEntry("/owner/get-house-list")
        .withCredentials()
        .send();

      return {
        houses: resp.data.result,
      };
    },
  },
};
