<template>
  <div>
    <el-row>
      <el-col :span="24" align="center"><h1>{{$t("title")}}</h1></el-col>
    </el-row>
    <FormInput @add-task="handleAddTask"/>
    <DataTable
      :tasks="tasks"
      @delete-task="handleDeleteTask"
      @change-task-level="handleChangeTaskLevel"
      @change-status="handleChangeStatus"
      @edit-task="handleEditTask"
      />
      <EditTaskDialog ref="dialog" :dialogVisible="dialogVisible" @submit-form="handleSubmitEditTask"/>
  </div>
</template>
<script src="./todo-app.ts"></script>
