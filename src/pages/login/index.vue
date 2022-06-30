<!--
 * @Author: 寒云 <1355081829@qq.com>
 * @Date: 2022-06-19 17:04:36
 * @LastEditTime: 2022-06-30 11:25:02
 * @LastEditors: 寒云
 * @Description: 
 * @FilePath: \electron-vite-vue\src\pages\login\index.vue
 * @QQ: 大前端QQ交流群: 976961880
 * @QQ3: 大前端QQ交流群3: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 最爱白菜吖, All Rights Reserved. 
-->
<template>
    <div id="login-container">
        <a-form id="login-form" :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }"
            autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="密码" name="password" :rules="[{ required: true, message: '密码不可以为空' }]">
                <a-input-password v-model:value="formState.password" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>

</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { doLogin } from '../../api/login';

interface FormState {
    username: string;
    password: string;
}
const formState = reactive<FormState>({
    username: '跃码教育',
    password: '123456',
});
const router = useRouter()
const onFinish = (user: User) => {
    doLogin(user).then(res => {
        if (res.success) {
            localStorage.setItem('token', res.data.token)
            message.success('登录成功')
            router.replace('/dashboard')
        } else {
            message.error(res.errorMessage)
        }
    })
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>
<style lang="scss">
#login-container {
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/bg.jpg);
    background-size: cover;
    position: relative;

    #login-form {
        padding-top: 80px;
        background-color: white;
        border-radius: 6px;
        position: absolute;
        width: 500px;
        height: 300px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>