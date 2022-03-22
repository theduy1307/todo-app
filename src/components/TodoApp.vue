<template>
  <div>
    <el-row>
      <el-col :span="24" align="center"><h1>Todo App</h1></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <el-input
          v-model="task"
          autocomplete="off"
          placeholder="Nhập task mới"
          @keyup.enter.native="handleAddTask"
        ></el-input>
      </el-col>
      <el-col :span="10" style="margin-left:5px">
        <el-select style="width:100%" v-model="level" placeholder="Chọn mức độ">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.title"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
      <el-col :span="4">
        <el-button style="margin-left: 3px" type="primary" @click="handleAddTask()" :disabled="task.length === 0 || level.length === 0" icon="el-icon-plus"
          >Thêm</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tasks" stripe style="width: 100%">
        <el-table-column prop="name" label="Tên tác vụ"> </el-table-column>
        <el-table-column label="Trạng thái">
          <template slot-scope="scope">
            <el-tag
              size="mini"
              style="cursor:pointer"
              @click="handleChangeStatus(scope.row)"
              :type="scope.row.status ? 'success' : 'danger'"
              :disable-transitions="true"
              >{{ scope.row.status ? "Chưa làm" : "Đã làm" }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="Mức độ">
          <template slot-scope="scope">
            <el-tag
              size="mini"
              style="cursor:pointer"
              @click="handleChangeLevel(scope.$index, scope.row)"
              :type="scope.row.level === '1' ? 'danger' : (scope.row.level === '2' ? 'primary' : 'success')"
              :disable-transitions="true"
              >{{ scope.row.level === '1' ? 'Rất quan trọng' : (scope.row.level === '2' ? 'Quan trọng' : 'Không quan trọng') }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Thao tác">
          <template slot-scope="scope">
            <el-button
              @click="handleDelete(scope.$index, scope.row)"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              >Xóa</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TodoApp extends Vue {
  @Prop() private msg!: string;

  formValid = false;
  tasks: any[] = JSON.parse(localStorage.getItem('tasks') || '[]')
  options:any[] = [
    {
      value: '1',
      title: 'Rất quan trọng'
    },
    {
      value: '2',
      title: 'Quan trọng'
    },
    {
      value: '3',
      title: 'Không quan trọng'
    }
  ]

  task = '';
  level = ''

  handleAddTask () {
    if (this.task.length === 0) return
    const newData = {
      id: Math.floor(Math.random() * 1000),
      name: this.task,
      status: true,
      level: String(this.level)
    }
    this.tasks.push(newData)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.task = ''
    this.level = ''
  }

  handleDelete (index: number) {
    this.tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  handleChangeStatus (row:any) {
    const item = this.tasks.find(x => x.id === row.id)
    item.status = false
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  handleChangeLevel (index:any, row:any) {
    const item = this.tasks.find(x => x.id === row.id)
    if (String(item.level) === '3') {
      item.level = '1'
    } else {
      const newLevel = Number(item.level) + 1
      item.level = String(newLevel)
    }
    this.tasks.splice(index, 1, item)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
