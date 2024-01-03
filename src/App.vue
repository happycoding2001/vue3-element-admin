<template>
  <div>home</div>
  <div>
    <svg-icon icon-class="jd" />
  </div>
  <el-button @click="handleLogin" type="primary">确定</el-button>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon/index.vue";
import { loginApi } from "@/api/auth";
// import.meta.env. 智能提示
const handleLogin = () => {
  loginApi({ username: "admin", password: "123" }).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped></style>
