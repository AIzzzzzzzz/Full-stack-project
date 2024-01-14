<template>
    <el-aside :width="$store.state.isCollapsed ? '64px' : '200px'">
        <el-menu :default-active="route.fullPath" :router="true" :collapse="$store.state.isCollapsed"
            class="el-menu-vertical-demo">
            <el-menu-item index="/index">
                <el-icon>
                    <House />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon>
                    <User />
                </el-icon>
                <span>用户中心</span>
            </el-menu-item>
            <el-sub-menu index="/user-manage">
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>用户管理</span>
                </template>

                <el-menu-item index="/user-manage/adduser">
                    <el-icon>
                        <CirclePlusFilled />
                    </el-icon>
                    添加用户</el-menu-item>
                <el-menu-item index="/user-manage/userlist">
                    <el-icon>
                        <Grid />
                    </el-icon>
                    用户列表</el-menu-item>


            </el-sub-menu>

            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon>
                        <Comment />
                    </el-icon>
                    <span>新闻管理</span>
                </template>

                <el-menu-item index="/news-manage/addnews">添加新闻</el-menu-item>
                <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>


            </el-sub-menu>
            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <MoreFilled />
                    </el-icon>
                    <span>产品管理</span>
                </template>

                <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
                <el-menu-item index="/product-manage/productslist">产品列表</el-menu-item>


            </el-sub-menu>

        </el-menu>

    </el-aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

let route = useRoute()

</script>

<style lang="scss" scoped></style>