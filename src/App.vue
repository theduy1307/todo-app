<template>
  <div id="app">
    <todo-app></todo-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import 'element-ui/lib/theme-chalk/index.css'
import TodoApp from './components/todo-app.vue'

@Component({
  components: {
    TodoApp
  }
})
export default class App extends Vue {}
</script>
<style scoped>
*{
 font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
