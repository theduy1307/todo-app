import { Component, Ref, Vue } from 'vue-property-decorator'
import DataTable from './data-table/data-table.vue'
import EditTaskDialog from './edit-task-dialog/edit-task-dialog.vue'
import FormInput from './form-input/form-input.vue'
@Component({
  components: {
    FormInput,
    DataTable,
    EditTaskDialog
  }
})
export default class TodoApp extends Vue {
  @Ref('dialog') readonly refDialog!: EditTaskDialog

  formValid = false;
  dialogVisible = false;
  tasks: any[] = JSON.parse(localStorage.getItem('tasks') || '[]')
  task:any

  handleAddTask (item:any) {
    if (item.task.length === 0 || item.level.length === 0) return
    const newData = {
      id: Math.floor(Math.random() * 1000),
      name: item.task,
      status: true,
      level: String(item.level)
    }
    this.tasks.push(newData)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.$notify({
      title: 'Thành công',
      message: 'Thêm mới nhiệm vụ thành công',
      type: 'success'
    })
  }

  handleDeleteTask (index: number) {
    this.tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.$notify({
      title: 'Thành công',
      message: 'Xóa nhiệm vụ thành công',
      type: 'success'
    })
  }

  handleChangeStatus (row:any) {
    const item = this.tasks.find(x => x.id === row.id)
    item.status = !item.status
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  handleChangeTaskLevel (data:any) {
    const item = this.tasks.find(x => x.id === data.row.id)
    if (String(item.level) === '3') {
      item.level = '1'
    } else {
      const newLevel = Number(item.level) + 1
      item.level = String(newLevel)
    }
    this.tasks.splice(data.index, 1, item)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  handleEditTask (id:number) {
    const item = this.tasks.find(x => x.id === id)
    this.task = JSON.parse(JSON.stringify(item))
    this.dialogVisible = true;
    (this.refDialog as any).data = { ...item };
    (this.refDialog as any).dialogVisible = true
  }

  handleCloseDialog (visible:boolean) {
    this.dialogVisible = visible
  }

  handleSubmitEditTask (item:any) {
    this.tasks = this.tasks.map(x => x.id !== item.id ? x : item)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
