import { Pie } from 'vue-chartjs'
import { Prop } from 'vue-property-decorator'

export default class DoughnutChart extends Pie {
  @Prop() data!:any
  @Prop() options!:any

  mounted () {
    this.renderChart(this.data, this.options)
  }
}
