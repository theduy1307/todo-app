import { StateType } from '@/types'
import { Component, Ref, Vue } from 'vue-property-decorator'
import { ActionContext } from 'vuex'
import { Action, Getter } from 'vuex-class'
import DataTable from '../../components/data-table/data-table.vue'
import EditTaskDialog from '../../components/edit-task-dialog/edit-task-dialog.vue'
import FormInput from '../../components/form-input/form-input.vue'
@Component({
  components: {
    FormInput,
    DataTable,
    EditTaskDialog
  }
})
export default class TodoApp extends Vue {
  @Ref('dialog') readonly refDialog!: EditTaskDialog
  @Getter tasks!:any[]
  @Action deleteTask!: ActionContext<StateType, StateType>;
  @Action addTask!: ActionContext<StateType, StateType>;

  formValid = false;
  dialogVisible = false;
  // tasks: any[] = JSON.parse(localStorage.getItem('tasks') || '[]')
  task:any;

  data= {
    labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [{
      label: 'đơn vị (triệu tấn)',
      backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#dcd615', '#57d408'],
      data: [63.2, 52.1, 73.4, 78.4, 80.5, 79.2, 82.1]
    }]
  }

  options = {
    title: {
      display: true,
      text: 'Biểu đồ  sản lượng lương thực việt nam'
    },
    responsive: true,
    maintainAspectRatio: false
  }

  handleAddTask (item:any) {
    if (item.task.length === 0 || item.level.length === 0) return
    const newData = {
      id: Math.floor(Math.random() * 1000),
      name: item.task,
      status: true,
      level: String(item.level)
    }
    this.$store.dispatch('addTask', newData)
    // this.tasks.push(newData)
    // localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.$notify({
      title: 'Thành công',
      message: 'Thêm mới nhiệm vụ thành công',
      type: 'success'
    })
  }

  handleDeleteTask (index: number) {
    this.$store.dispatch('deleteTask', index)
    // this.tasks.splice(index, 1)
    // localStorage.setItem('tasks', JSON.stringify(this.tasks))
    this.$notify({
      title: 'Thành công',
      message: 'Xóa nhiệm vụ thành công',
      type: 'success'
    })
  }

  handleChangeStatus (id:number) {
    this.$store.dispatch('changeStatus', id)
  }

  handleChangeTaskLevel (data:any) {
    const item = this.tasks.find(x => x.id === data.row.id)
    // if (String(item.level) === '3') {
    //   item.level = '1'
    // } else {
    //   const newLevel = Number(item.level) + 1
    //   item.level = String(newLevel)
    // }
    // this.tasks.splice(data.index, 1, item)
    this.$store.dispatch('changeLevel', item.id)
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
