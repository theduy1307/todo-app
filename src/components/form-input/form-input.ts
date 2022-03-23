import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class FormInput extends Vue {
  task = ''
  level = ''
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

  @Emit('add-task')
  handleAddTask () {
    const newData = {
      task: this.task,
      level: this.level
    }
    this.task = ''
    this.level = ''
    return newData
  }
}
