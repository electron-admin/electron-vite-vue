<!--
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-19 17:42:46
 * @LastEditTime: 2022-06-29 11:22:03
 * @LastEditors: 寒云
 * @Description: 
 * @FilePath: \vue-admin\src\pages\user\index.vue
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved. 
-->
<template>
    <a-button type="primary" @click="showAddModal">添加用户</a-button>
    <AddUser ref="addRef" @cancel="cancelAdd" />
    <a-table :columns="columns" :data-source="tableData.list">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    <smile-outlined />
                    Name
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'tags'">
                <span>
                    <a-tag v-for="tag in record.tags" :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                        {{ tag.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <a-space>
                    <DeleteUser :id="record.id" @delete-user="deleteUser" />
                </a-space>
            </template>
        </template>
    </a-table>
</template>
<script lang="ts" setup>

import { reactive, ref } from 'vue';
import { getUserList } from '../../api/user';
import DeleteUser from './components/DeleteUser.vue';
import AddUser from './components/AddUser.vue';
const addRef = ref()
const tableData = reactive<{ list: User[] }>({
    list: []
})
function getUserByPage() {
    getUserList().then(res => {
        tableData.list = res.data.list
    })
}
getUserByPage()
function showAddModal() {
    addRef.value.visible = true
}
function cancelAdd(refresh?: Boolean) {
    if (refresh) {
        getUserByPage()
    }
    addRef.value.visible = false

}
function deleteUser(userId: number) {
    tableData.list = tableData.list.filter(u => u.id !== userId)
}
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '管理',
        dataIndex: 'action',
        key: 'action',
    },
];
const data = [
    {
        key: '1',
        username: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
];
</script>