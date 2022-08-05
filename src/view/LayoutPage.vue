<template>
  <div class="layout-page">
    <el-container>
      <el-header class="display-justify-align">
        <!--        <div>-->
        <!--          <h1>-->
        <!--            <a href=""></a>-->
        <!--          </h1>-->
        <!--        </div>-->
        <div>
          <el-icon>
            <Aim/>
          </el-icon>
          图片
        </div>
        <div class="display-align">
          <el-input
              class="mr-20"
              v-model="keyword"
              placeholder="搜索文章"
          >
            <template #append>
              <el-button type="primary" size="small" :icon="Search"/>
            </template>
          </el-input>
          <div class="header-menu-item mr-20" v-for="item in headerMenu" :key="item.id">{{ item.name }}</div>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {Aim, Search} from '@element-plus/icons-vue'
import {headerMenu} from "../common/headerMenu";
import {ref} from "vue";


const keyword = ref('')


</script>

<style lang='scss' scoped>
.layout-page {

  .el-header {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
    background-color: #FFF;
    //transition: all .3s ease;
    //-webkit-transition: all .3s ease;

    .header-menu-item {
      padding: 20px;
      box-sizing: border-box;
      white-space: nowrap;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }

  .el-main {
    margin-top: 80px;
    background-color: #f4f5f5;
  }

}
</style>
