<template>
    <div class="mainbox">
        <div class="common-layout">
            <el-container>
                <MainLayout></MainLayout>

                <el-container direction="vertical">
                    <MainHeader></MainHeader>
                    <el-main>
                        <RouterView></RouterView>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script setup>
import MainHeader from '../components/mainbox/main_header'
import MainLayout from '../components/mainbox/main_layout'
</script>

<style lang="scss" scoped>
.mainbox {

    height: 100%;

    .common-layout {


        .el-aside {
            height: 100%;
        }
    }
}
</style>