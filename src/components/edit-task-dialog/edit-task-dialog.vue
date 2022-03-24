<template>
  <el-dialog
    :title="$t('edit_task')"
    :visible.sync="dialogVisible"
  >
    <el-row>
        <el-col :span="24">
            <el-input :placeholder="$t('enter_new_task')" v-model="data.name"></el-input>
        </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
        <el-col :span="12" style="display: flex; justify-content: center; margin-top: 10px">
            <el-switch
                v-model="data.status"
                :active-text="$t('undone')"
                :inactive-text="$t('done')">
            </el-switch>
        </el-col>
        <el-col :span="12">
            <el-select style="width: 100%" v-model="data.level" :placeholder="$t('choose_level')">
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
      <el-button @click="handleCloseDialog">{{$t('cancel')}}</el-button>
      <el-button type="primary" @click="onSubmit"
        >{{$t('confirm')}}</el-button
      >
    </span>
  </el-dialog>
</template>
<script lang="ts" src="./edit-task-dialog.ts"></script>
