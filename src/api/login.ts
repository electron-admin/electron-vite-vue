import request from "../utils/request";
export function doLogin(user: User) {
	return request.post<any, ResponseSuccess<{ token: string }>>(
		"/admin/admin/login",
		user
	);
}
