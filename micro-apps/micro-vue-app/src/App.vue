<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="layout">
    <div class="right">
      <!-- 这里路由需要通过pinia或localstorage获取，因为在 ./main.ts 时有做处理 -->
      <div class="item">
        <!-- <RouterLink to="/">首页</RouterLink> -->
        <RouterLink to="/microVueApp/">首页</RouterLink>
      </div>
      <div class="item">
        <!-- <RouterLink to="/about">关于</RouterLink> -->
        <RouterLink to="/microVueApp/about">关于</RouterLink>
      </div>
      <div class="item">
        <!-- <RouterLink to="/route">vue路由</RouterLink> -->
        <RouterLink to="/microVueApp/route">vue路由</RouterLink>
      </div>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="less">
.layout {
  display: flex;
  .right {
    width: 300px;
    height: 100vh;
    border-right: 1px solid #eee;
    margin-right: 20px;
    text-align: center;
    padding: 16px;
  }
  .content {
    width: calc(100% - 320px);
    padding: 16px;
  }
}
</style>
