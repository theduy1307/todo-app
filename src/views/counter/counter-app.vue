<template>
  <div style="margin:auto">
    <div>
    <h1>Vue Counter</h1>
    <span>
      <el-button @click="decrement" type="primary" circle><i class="el-icon-minus"></i></el-button>
      {{ currentCount }}
      <el-button @click="increment" type="primary" circle><i class="el-icon-plus"></i></el-button>
    </span>
  </div>
  </div>
</template>
<script lang="ts" src="./counter-app.ts"></script>
