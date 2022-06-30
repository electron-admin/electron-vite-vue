/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-19 17:03:15
 * @LastEditTime: 2022-06-30 11:57:25
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \electron-vite-vue\src\router\index.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import Login from "../pages/login/index.vue";
import Dashboard from "../pages/dashboard/index.vue";
import User from "../pages/user/index.vue";
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: AppLayout,
		redirect: "/dashboard",
		children: [
			{
				path: "/dashboard",
				component: Dashboard,
			},
			{
				path: "/user",
				component: User,
			},
		],
	},
	{
		path: "/login",
		component: Login,
	},
];
const router = createRouter({
	routes,
	history: createWebHashHistory(),
});
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem("token");
	if (to.path !== "/login") {
		if (!token) {
			next({ path: "/login" });
		} else {
			next();
		}
	} else {
		next();
	}
});
export default router;
