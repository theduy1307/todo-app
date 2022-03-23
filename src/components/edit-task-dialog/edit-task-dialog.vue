<template>
  <el-dialog
    title="Chỉnh sửa nhiệm vụ"
    :visible.sync="dialogVisible"
  >
    <el-row>
        <el-col :span="24">
            <el-input placeholder="Please input" v-model="data.name"></el-input>
        </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
        <el-col :span="12" style="display: flex; justify-content: center; margin-top: 10px">
            <el-switch
                v-model="data.status"
                active-text="Chưa làm"
                inactive-text="Đã làm">
            </el-switch>
        </el-col>
        <el-col :span="12">
            <el-select style="width: 100%" v-model="data.level" placeholder="Chọn mức độ">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.title"
            :value="item.value"
            >
            </el-option>
        </el-select>
        </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCloseDialog">Cancel</el-button>
      <el-button type="primary" @click="onSubmit"
        >Confirm</el-button
      >
    </span>
  </el-dialog>
</template>
<script lang="ts" src="./edit-task-dialog.ts"></script>
