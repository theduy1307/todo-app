<template>
  <el-row type="flex" justify="center">
    <el-col :span="10">
      <el-input
        v-model="task"
        autocomplete="off"
        placeholder="Nhập task mới"
        @keyup.enter.native="handleAddTask"
      ></el-input>
    </el-col>
    <el-col :span="10" style="margin-left: 5px">
      <el-select style="width: 100%" v-model="level" placeholder="Chọn mức độ">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.title"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-button
        style="margin-left: 3px"
        type="primary"
        @click="handleAddTask"
        :disabled="task.length === 0 || level.length === 0"
        icon="el-icon-plus"
        >Thêm</el-button
      >
    </el-col>
  </el-row>
</template>
<script lang="ts" src="./form-input.ts"></script>
