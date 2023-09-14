<script>
import OwnerPanel from "@/components/user-panel/OwnerPanel.vue";
import ModifyPanel from "@/components/user-panel/ModifyPanel.vue";
import CustomerPanel from "@/components/user-panel/CustomerPanel.vue";
import houseAnt from "@/assets/houseAnt";

export default {
  components: {
    CustomerPanel,
    ModifyPanel,
    OwnerPanel
  },
  data() {
    return {
      state: null,
      username: "",
      tel: ""
    };
  },
  computed: {
    subPanel() {
      switch (this.state) {
      case "modify":
        return ModifyPanel;
      case "customer":
        return CustomerPanel;
      case "owner":
        return OwnerPanel;
      default:
        return null;
      }
    }
  },
  methods: {

    logout() {
      houseAnt.user.logout().then(({success, message}) => {
        if (success) {
          console.log(">> " + message);
          this.$emit("logout");
        } else {
          console.log(">> logout failed: unknown error");
        }
      });
    },

    switchPanel(name) {
      if (this.state === name) {
        this.state = null;
      } else {
        this.state = name;
      }
    },

    getInfo() {
      houseAnt.user.getInfo().then(({user, error, message}) => {
            if (user) {
              console.log(">> get user info successfully");
              ({username: this.username, tel: this.tel} = user);

            } else if (error) {
              console.log(">> get user info failed: " + message);

            } else {
              console.log(">> get user info failed: unknown error");

            }
          }
      );
    }
  },
  emits: ["logout"],
  created() {
    this.getInfo();
  }
};
</script>

<template>
  <div class="info-panel border-panel">
    <img class="avatar" src="@/assets/no-pic.jpg" alt="avatar">
    <div class="base-info">
      <div class="username">{{ username }}</div>
      <div class="tel">{{ tel }}</div>
    </div>
    <div class="button-bar">
      <button
          @click="switchPanel('modify')"
          class="panel-button"
          :class="{active: state === 'modify'}">
        修改个人信息
      </button>
      <button @click="logout" class="panel-button">退出登录</button>
    </div>
    <div class="button-bar">
      <button @click="switchPanel('customer')"
              class="panel-button"
              :class="{active: state === 'customer'}">
        我的预约
      </button>
      <button @click="switchPanel('owner')"
              class="panel-button"
              :class="{active: state === 'owner'}">
        我的房源
      </button>
    </div>
  </div>

  <component :is="subPanel" :username="username" @update="getInfo" @changePass="this.$emit('logout')" :tel="tel"/>
</template>

<style scoped>
.info-panel {
  display: flex;
  flex-direction: row;
  height: 120px;
}

.info-panel + * {
  margin-top: 30px;
}

.avatar {
  display: block;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 2px solid grey;
  margin-right: 20px;
}

.base-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  flex-grow: 1;
  margin-right: 20px;
}

.base-info .username {
  font-size: 20px;
}

.button-bar {
  display: flex;
  margin-left: 40px;
  flex-direction: column;
  justify-content: space-between;
}

button {
  width: 200px;
}
</style>
