<!--
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-19 18:02:33
 * @LastEditTime: 2022-06-29 11:21:40
 * @LastEditors: 寒云
 * @Description: 
 * @FilePath: \vue-admin\src\pages\user\components\AddUser.vue
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved. 
-->
<template>
    <a-modal :visible="visible" title="添加用户" @cancel="cancel" :maskClosable="false" @ok="addUser">
        <a-form ref="addRef" :model="formState" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }" autocomplete="off">
            <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
                <a-input v-model:value="formState.username"></a-input>
            </a-form-item>
            <a-form-item label="邮箱" name="email" :rules="[{ type: 'email', required: true, message: '邮箱格式不合法' }]">
                <a-input v-model:value="formState.email"></a-input>
            </a-form-item>
            <a-form-item label="密码" name="password" :rules="[{ required: true, message: '密码不可以为空' }]">
                <a-input v-model:value="formState.password"></a-input>
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { reactive, ref, watch } from 'vue';
import { doAddUser } from '../../../api/user';
const formState = reactive<Omit<User, 'id'>>({
    username: '',
    email: '',
    password: '',
});
const addRef = ref()
const visible = ref<Boolean>(false)
defineExpose({ visible })
const emits = defineEmits<{ (e: 'cancel', refresh?: boolean): void }>()
function cancel() {
    visible.value = false
}
watch(visible, () => {
    if (!visible.value) {
        addRef.value.resetFields()
    }
})
function addUser() {
    addRef.value.validate().then(() => {
        doAddUser(formState).then(res => {
            if (res.success) {
                emits('cancel', true)
                message.success('添加成功')
            } else {
                message.error(res.errorMessage)
            }
        })
    })
}

</script>