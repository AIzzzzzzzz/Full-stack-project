<template>
    <div class="main">
        <div class="from_container">
            <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="120px"
                class="demo-ruleForm">
                <el-form-item type="username" prop="username" label="用户名">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item type="password" prop="password" label="密码">
                    <el-input v-model="loginForm.password" />
                </el-form-item>

            </el-form>
            <el-button class="btn" type="primary" size="default" @click="submitFrom(loginForm)">提交</el-button>

        </div>

    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'
let loginFormRef = ref()
let loginForm = reactive({
    username: '456456456',
    password: '4564213123'
})

const router = useRouter()
const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('用户名不能为空'))
    } else {
        if (loginForm.username !== '') {
            if (!loginFormRef.value) return
            loginFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('密码不能为空'))
    } else if (value !== loginForm.password) {
        callback(new Error("密码错误"))
    }
    else if (value.length <= 6) {
        callback(new Error('长度太短'))
    }
    else {
        callback()
    }
}

//规则
const loginRules = reactive({
    username: [{ validator: validatePass, trigger: 'blur' }],
    password: [{ validator: validatePass2, trigger: 'blur' }],

})


//提交方法
const submitFrom = () => {
    loginFormRef.value.validate((value) => {
        if (value) {
            console.log(loginForm);
            localStorage.setItem('token', 'kewvalue')
            //发送登录请求，把用户名密码给后端
            axios.post('/adminapi/users/login',loginForm).then((res)=>{
                console.log(res.data);
            })
            router.push('/center')
        }
    })

}

</script>

<style lang="scss" scoped>
.main {

    height: 100vh;
    background-color: rgb(216, 136, 6);

    display: flex;
    justify-content: center;



    .from_container {
        width: 400px;
        height: 400px;
        margin-top: 200px;
        margin-left: 100px;

        .btn {
            margin-left: 230px;
        }
    }
}
</style>