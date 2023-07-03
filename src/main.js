import "./assets/reset.css";

import {createApp} from "vue";

import App from './App.vue'
import TestForm from "@/components/tests/TestForm.vue";
import TestUsers from "@/components/tests/TestUsers.vue";

createApp(App).mount('#app')
createApp(TestForm).mount("#form");
createApp(TestUsers).mount("#users");
