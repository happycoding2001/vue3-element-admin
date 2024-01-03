<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
// import.meta.env. 智能提示
</script>

<template>
  <div>home</div>
  <el-button type="primary">确定</el-button>
  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<style scoped></style>
