<template>
  <div class="Index-page">
    <div class="content-left">
      <el-card style="margin-bottom: 16px" shadow="hover" v-for="one of 10" :key="one">
        <div>
          <div class="article-list">
            <img class="image" src="https://p15.qhimg.com/bdm/1600_900_85/t018c02bbc479643b30.jpg" alt="">
            <div class="content">
              <div class="title">从20s优化到500ms，我用了这三招</div>
              <div class="main">前言 接口性能问题，对于从事后端开发的同学来说，是一个绕不开的话题。想要优化一个接口的性能，需要从多个方面着手。 其实，我之前也写过一篇接口性能优化相关的文章《聊聊接口性能优化的11个小技巧》，发表之
                A打发手动阀打发手动阀士大夫撒旦发射点发大撒发射点发射点发射点发射点发撒旦发生啊
              </div>
            </div>
            <div class="display" style="color: #86909c;">
              <el-icon><Clock /></el-icon>
              <div class="ml-4 fs-14">2022-08-05 16:00</div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </el-card>
      <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[6, 10, 20, 30, 40]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="10"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
    <div class="content-right">
      <el-card shadow="hover" class="user-card">
        <div class="user-logo">
          <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
          <div class="user-name">username</div>
        </div>
        <div class="article-wrap">
          <div class="article-info">
            <div>文章</div>
            <div>11</div>
          </div>
          <div class="article-info">
            <div>标签</div>
            <div>11</div>
          </div>
          <div class="article-info">
            <div>分类</div>
            <div>11</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { Clock } from '@element-plus/icons-vue'
import {ref} from "vue";
const currentPage = ref(1)
const pageSize = ref(6)

const handleSizeChange = () =>{}
const handleCurrentChange = () =>{}
</script>

<style lang="scss" scoped>
.Index-page {
  max-width: 1200px;
  margin: auto;
  display: flex;

  .content-left {
    width: 75%;
    padding: 6px;

    .article-list {
      display: flex;
      justify-content: space-between;

      .image {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        object-fit: cover;
      }

      .content {
        flex: 1;
        margin: 0 20px;

        .title{
          font-weight: 700;
          font-size: 16px;
          color: #1d2129;
          line-height: 24px;
        }
        .main{
          color: #86909c;
          font-size: 13px;
          line-height: 22px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }

    }
  }

  .content-right {
    width: 25%;
    padding: 6px;

    .user-card {
      .user-logo {
        text-align: center;

        .user-name {
          margin: 10px 0;
        }
      }

      .article-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;

        .article-info {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
</style>
