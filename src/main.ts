// src/main.ts
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
 
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
 
import {setupStore} from '@/store';
 


const app = createApp(App);
// 全局挂载
setupStore(app);
 
app.use(ElementPlus).mount('#app');