import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormInput extends Vue {
    @Prop() tasks!: any[]

    @Emit('delete-task')
    handleDeleteTask (index:number) {
      return index
    }

    @Emit('change-task-level')
    handleChangeTaskLevel (index:number, row:any) {
      return { index, row }
    }

    @Emit('change-status')
    handleChangeStatus (row:any) {
      return row
    }

    @Emit('edit-task')
    handleEditTask (id:number) {
      return id
    }
}
