/*
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-30 09:49:05
 * @LastEditTime: 2022-06-30 12:18:53
 * @LastEditors: 寒云
 * @Description:
 * @FilePath: \electron-vite-vue\src\env.d.ts
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare global {
	interface ImportMetaEnv {
		readonly VITE_APP_BASE_URL: string;
		// more env variables...
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
	interface ResponseSuccess<T = {}> {
		success: boolean;
		errorMessage?: string;
		data: T;
	}
	interface IPagination<T> {
		success: boolean;
		errorMessage?: string;
		data: {
			list: T[];
			current: 1;
			pageSize: number;
			total: number;
			totalPage: number;
		};
	}
}
export {};
