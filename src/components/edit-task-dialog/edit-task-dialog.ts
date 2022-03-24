import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class EditTaskDialog extends Vue {
  dialogVisible = false;
  data:any = {};
  options:any[] = [
    {
      value: '1',
      title: this.$t('very_important')
    },
    {
      value: '2',
      title: this.$t('important')
    },
    {
      value: '3',
      title: this.$t('none_important')
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
