import {
  createApp
} from 'vue'
import {
  Button,
  message,
  Modal
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import './index.css'
const app = createApp(App);
app.use(Button).use(Modal).mount('#app');