/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-30 09:49:05
 * @LastEditTime: 2022-06-30 11:15:47
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \electron-vite-vue\src\main.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
createApp(App).use(Antd).use(router).mount("#app");
