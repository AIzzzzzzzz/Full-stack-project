<template>
    <div class="heder">
        <el-page-header content="用户中心" :icon="null" title="管理系统">

        </el-page-header>
        <el-row :gutter="20">
            <el-card class="card_width">
                <el-col :span="8" :offset="0">
                    <el-avatar :size="80" :src="avatarUrl" />
                    <h3>{{ store.state.userinfo.username }}</h3>
                    <h5 style="width: 60px;">{{ store.state.userinfo.role === 1 ? '管理员' : '编辑' }}</h5>
                </el-col>
            </el-card>

            <el-col :span="16" :offset="0">
                <el-card>
                    <template #header>
                        <div>
                            <span>个人信息</span>
                        </div>
                    </template>

                    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                        :size="formSize" status-icon>
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="ruleForm.username" />
                        </el-form-item>
                        <el-form-item label="性别" prop="gender">
                            <el-select v-model="ruleForm.gender" placeholder="Activity zone">
                                <el-option label="1" value="shanghai" />
                                <el-option label="0" value="beijing" />
                                <el-option label="2" value="beijing" />
                            </el-select>

                        </el-form-item>
                        <el-form-item label="简介" prop="introduction">
                            <el-input type="textarea" v-model="ruleForm.introduction" />
                        </el-form-item>
                        <el-form-item label="头像" prop="avatar">
                            <el-upload class="avatar-uploader"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                :show-file-list="false" :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload" :auto-upload="false" :on-change="handlechange">
                                <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitfrom()">
                                更新
                            </el-button>
                        </el-form-item>
                    </el-form>


                </el-card>








            </el-col>


        </el-row>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import store from '@/store';

import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus';
import upload from '../../utile/upload'


const ruleFormRef = ref()
const { username, avatar, introduction, gender } = store.state.userinfo
const ruleForm = reactive({
    username: '',
    gender: 0,
    introduction:'',
    avatar:'',
    file: null,
})
const cloneRuleFrom = JSON.parse(JSON.stringify(ruleForm))
const avatarUrl = computed(() => store.state.userinfo.avatar ? 'http://localhost:3000'+store.state.userinfo.avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

const rules = reactive({
    username: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 12, message: '长度', trigger: 'blur' }
    ],
    gender: [
        { required: true, message: '请输入', trigger: 'blur' },

    ],
    introduction: [
        { required: false, trigger: 'blur' },

    ],
    avatar: [
        { required: true, message: '请输入', trigger: 'blur' },

    ],
})

const submitfrom = async () => {
    ruleFormRef.value.validate(async (file) => {
        if (file) {
           await upload('/adminapi/users/upload',ruleForm).then((res)=>{
                ElMessage({
                    type:'success',
                    message:res.data.msg
                })
                console.log(res.data);
                store.commit('insertUserInfo',res.data.data)
                
                console.log('http://localhost:3000'+store.state.userinfo.avatar,'这是头像地址');
                
                // for(let c in cloneRuleFrom){
                //     ruleForm[c] = cloneRuleFrom[c]
                // }
            })
            
           
        }

    })
}


const handlechange = (node) => {
    console.log(node);
    if (node) {
        console.log(node.raw,'rew的');
        console.log(URL.createObjectURL(node.raw));
        ruleForm.avatar = URL.createObjectURL(node.raw)
        ruleForm.file = node.raw

    }

}



</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.heder {
    min-width: 600px;
}

.card_width {
    width: 30%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}
</style>



