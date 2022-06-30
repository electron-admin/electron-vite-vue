/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-30 09:49:05
 * @LastEditTime: 2022-06-30 11:12:19
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \electron-vite-vue\vite.config.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: "./",
	server: {
		port: 3008,
		proxy: {
			"^/admin": {
				target: "http://localhost:3006",
			},
		},
	},
});
