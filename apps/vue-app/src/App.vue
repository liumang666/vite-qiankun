<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="layout">
    <div class="right">
      <div class="item">
        <RouterLink to="/">主应用-首页</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/about">主应用-关于</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/route">主应用-vue路由</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/microVueApp">主应用-vue微应用</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/microReactApp">主应用-react微应用</RouterLink>
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
