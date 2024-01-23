<template>
    <div class="-container">
        <el-card>
            <el-page-header content="用户列表" :icon="null" title="管理系统"></el-page-header>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column label="头像" width="180">
                    <template #default="scoped">
                        <div v-if="scoped.row.avatar">
                            <el-avatar size="50" :src="'http://localhost:3000' + scoped.row.avatar"></el-avatar>
                        </div>
                        <div v-else>
                            <el-avatar size="50"
                                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="username" label="用户名" />
                <el-table-column prop="role" label="角色">
                    <template #default="scoped">
                        <div v-if="scoped.row.role === 1">
                            超级管理员
                        </div>
                        <div v-else>管理员</div>
                    </template>
                </el-table-column>
                <el-table-column prop="username" label="操作">
                    <template #default="scope">
                        <el-button @click="handleEdit(scope)" size="small">编辑</el-button>
                        <el-popconfirm @confirm="handleDelete(scope.$index, scope.row)" title="你确定删除吗?">
                            <template #reference>
                                <el-button size="small" type="danger">删除</el-button></template>
                        </el-popconfirm>

                    </template>
                </el-table-column>
            </el-table>



        </el-card>



        <el-dialog v-model="centerDialogVisible" title="编辑" width="35%" align-center>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                :size="formSize" status-icon>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" />

                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <el-input v-model="ruleForm.role" />
                </el-form-item>


            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary"  @click="submitfrom()" >
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { onMounted, ref, reactive } from 'vue';

const tableData = ref([])
let centerDialogVisible = ref(false)

const ruleFormRef = ref()
const ruleForm = reactive({
    username: '',
    password: 0,
    role:'',
    id:''
})

const rules = reactive({
    username: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 12, message: '长度', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入', trigger: 'blur' },

    ],
    role: [
        { required: true,message:'必须是012', trigger: 'blur' },
        

    ],

})

const submitfrom = async () => {
    ruleFormRef.value.validate(async (file) => {
        if (file) {
            centerDialogVisible.value = false
            await axios.put('/adminapi/users/putuser', ruleForm).then((res) => {
                ElMessage({
                    type: 'success',
                    message: res.data.msg
                })
                
                
                
            })
            
            
        }
        
    })
    window.location.reload()
}

const GETlist = async () => {
    await axios.get('/adminapi/users/list').then((res) => {
        tableData.value.push(...res.data.data)
    })
}



const handleEdit = async (data) => {
    centerDialogVisible.value = true
    console.log(data.row.id);
    await axios.get(`/adminapi/users/list/${data.row.id}`).then((res) => {
        
        Object.assign(ruleForm, res.data.data)
       
    })

}
const handleDelete = async (index, row) => {
    await axios.delete(`/adminapi/users/list/${row.id}`).then((res) => {
        tableData.value.splice(index, 1)
        
        ElMessage({
            type: 'success',
            message: res.data.msg
        })
        
    })

}



onMounted(() => {
    GETlist()
})
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
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}
</style>
