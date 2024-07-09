<template>
  <div id="subapp-viewport"></div>
</template>

<script setup lang="ts">
import { start } from "qiankun";
import { onMounted } from "vue";

onMounted(() => {
  if (!(window as any)?.qiankunStarted) {
    (window as any).qiankunStarted = true;
    start();
  }
});
</script>
