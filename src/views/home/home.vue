<template>
    <div class="main">
        <div class="heder">
        <el-page-header content="首页" :icon="null" title="管理系统">
    <!-- <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template> -->
  </el-page-header>
    </div>
    <div class="card">

        <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>我的名字：{{ store.state.userinfo.username }}</span>
        
      </div>
      
    </template>
        <div class="role">
           
          <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        

        
            <span style="margin-left: 20px;">我的身份是：</span>
        <div ref="super_role_color" class="super_role">{{ store.state.userinfo.role== 1 ?'超级管理员':'管理员' }}</div>
       
       

             </div>
    
  </el-card>


    </div>
    </div>
</template>

<script  setup>
import store from '@/store';
import { ref } from 'vue';


</script>

<style lang="scss" scoped>
    .main{
        width: 95%;
        min-width: 370px;
        .role{
            display: flex;
            align-items: center;
            font-size: 18px;
            span{
                margin-left: 10px;
            }
        }
        
        
    }
</style>