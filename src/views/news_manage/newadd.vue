<template>
    <div class="-container">
        <el-page-header content="添加新闻" :icon="null" title="管理系统"></el-page-header>
    </div>
    <el-form ref="newsFormRef" :model="newsForm" :rules="newsRules" label-width="120px" class="demo-ruleForm"
                        :size="formSize" status-icon>

                        <el-form-item label="标题" prop="title">
                            <el-input v-model="newsForm.title" />
                        </el-form-item>
                       <el-form-item label="内容" prop="content">
                            <Editor></Editor>
                        </el-form-item>
                        <el-form-item label="标题" prop="title">
                            <el-input v-model="newsForm.title" />
                        </el-form-item>
                       
                       
                       
                       
                       </el-form>
</template>

<script setup>
import { reactive,ref } from 'vue';
import Editor from '../../components/editor/Editor.vue'
const newsFormRef = ref()
const newsForm = reactive({
    title:"",
    content:"",
    category:1,
    cover:"",
    file:null,
    isPublish:0,
    username:''
})
const newsRules = [
    {
        title:[
        { required: true, message: '请输入', trigger: 'blur' },

    ]
},
{
        content:[
        { required: true, message: '请输入', trigger: 'blur' },

    ]
},
{
        category:[
        { required: true, message: '请输入', trigger: 'blur' },

    ]
},
{
        cover:[
        { required: true, message: '请输入', trigger: 'blur' },

    ]
},
]
</script>

<style lang="scss" scoped></style>