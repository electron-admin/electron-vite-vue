import request from "../utils/request";
export function getUserList(current: number = 1, pageSize: number = 15) {
	return request.get<any, IPagination<User>>("/admin/user", {
		params: { current, pageSize },
	});
}
export function deleteUserById(id: number) {
	return request.delete<any, ResponseSuccess>("/admin/user/" + id);
}
export function doAddUser(user: Omit<User, "id">) {
	return request.post<any, ResponseSuccess>("/admin/user", user);
}
