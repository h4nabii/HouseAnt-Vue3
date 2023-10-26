import {defineStore} from "pinia";
import defaultAvatar from "@/assets/no-pic.jpg";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    access: "notLogged",
    avatar: defaultAvatar,
  }),
});
