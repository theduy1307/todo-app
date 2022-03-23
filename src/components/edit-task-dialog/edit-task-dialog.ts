import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class EditTaskDialog extends Vue {
  dialogVisible = false;
  data:any = {};
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

  form:any = {}

  beforeCreate (item:any) {
    this.data = { ...item }
  }

  handleCloseDialog () {
    this.dialogVisible = false
  }

  @Emit('submit-form')
  onSubmit () {
    this.dialogVisible = false
    return this.data
  }
}
