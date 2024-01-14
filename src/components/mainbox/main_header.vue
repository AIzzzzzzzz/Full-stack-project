<template>
    <el-header>
        <div class="main_header">
            <div class="left">
                <div @click="change" v-if="store.state.isCollapsed"> <el-icon>
                        <ArrowRight />
                    </el-icon> </div>
                <div @click="change" v-else> <el-icon>
                        <ArrowLeft />
                    </el-icon></div>

                <span>企业门户管理系统</span>
            </div>
            <div class="right">
                <span>欢迎登陆</span>
                <el-dropdown>
                    <span class="el-dropdown-link">

                        <el-icon>
                            <UserFilled />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="pathcenter">个人中心</el-dropdown-item>
                            <el-dropdown-item @click="untoken">退出</el-dropdown-item>

                        </el-dropdown-menu>
                    </template>
                </el-dropdown>




            </div>
        </div>


    </el-header>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
let store = useStore()
const router = useRouter()
const change = () => {
    store.commit('changeisCollapsed')
}
const pathcenter = () => {
    router.push('/center')
}
const untoken = () => {

    localStorage.removeItem('token')
    router.push('/login')

}
</script>

<style lang="scss" scoped>
.main_header {
    display: flex;
    justify-content: space-between;
    background-color: #2c3a49;
    height: 6vh;
    text-align: center;
    line-height: 6vh;

    .left {
        display: flex;

        div {
            width: 3vh;

        }

    }

    .right {
        margin-right: 3vh;
        text-align: center;

        .el-dropdown-link {
            margin-left: 1vh;
            line-height: 6vh;
            text-align: center;
        }
    }
}
</style>