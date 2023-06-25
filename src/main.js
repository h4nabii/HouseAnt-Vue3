import "./assets/reset.css";
import "./assets/base.css";

import {createApp} from "vue";

// import App from './App.vue'
import TestForm from "@/components/TestForm.vue";
import TestUsers from "@/components/TestUsers.vue";

// createApp(App).mount('#app')
createApp(TestForm).mount("#form");
createApp(TestUsers).mount("#users");
