<template>
  <div
    ref="containerRef"
    class="micro-router-container"
  ></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Entry, loadMicroApp } from 'qiankun'

const props = defineProps<{
  name: string
  entry: Entry
}>()

const containerRef = ref()
const microApp = ref()

onMounted(() => {
  microApp.value = loadMicroApp({
    name: props.name,
    entry: props.entry,
    container: containerRef.value,
  })
})

onUnmounted(() => {
  microApp.value.unmount()
})
</script>

<style lang="less">
.micro-router-container {
  height: 100%;
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
}
</style>
