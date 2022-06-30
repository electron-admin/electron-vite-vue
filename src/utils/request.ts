/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-30 10:39:59
 * @LastEditTime: 2022-06-30 11:29:00
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \electron-vite-vue\src\utils\request.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
import { message } from "ant-design-vue";
import axios from "axios";
const request = axios.create({
	timeout: 5000,
});
request.interceptors.request.use((c) => {
	const token = localStorage.getItem("token");
	if (token) {
		c.headers = {
			...c.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return c;
});
request.interceptors.response.use(
	(res) => {
		return res.data;
	},
	(e) => {
		message.error(e.message);
		return Promise.reject(e.message);
	}
);
export default request;
