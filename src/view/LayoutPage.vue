<template>
    <div>首页</div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" @click="handleSuccess">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning" @click="handleWarning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
</template>

<script setup>
import { message } from '@/utils/message';

const handleSuccess = () =>{
    message('成功', 'success')
}
const handleWarning = () =>{
    message('警告', 'warning')
}
</script>

<style lang='scss' scoped>
</style>