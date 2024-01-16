<template>
    <div class="-container">
        <button @click="req_ceshi">center</button>
    </div>
</template>

<script setup>
import axios from 'axios';



const req_ceshi = async()=>{
    await axios.post('/adminapi/user/user','get的数据').then((res)=>{
        console.log(res.data);
    })
    
    console.log('已发送');
}
</script>

<style lang="scss" scoped></style>