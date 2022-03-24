<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><router-link to="/">Todo</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/counter">Counter</router-link></el-menu-item>
    </el-menu>
    <div class="language">
      <el-button type="light" @click="setLocale('en')" class="button"><img src="@/assets/uk.png" height="20px"/></el-button>
      <el-button type="light" @click="setLocale('vi')" class="button"><img src="@/assets/vi.png" height="20px"/></el-button>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import 'element-ui/lib/theme-chalk/index.css'
import TodoApp from './views/todo/todo-app.vue'
import Counter from './views/counter/counter-app'

@Component({
  components: {
    TodoApp,
    Counter
  }
})
export default class App extends Vue {
  created () {
    const locale = localStorage.getItem('locale')

    if (locale) {
      this.$i18n.locale = locale
    } else if (navigator.language) {
      // this.$i18n.locale = navigator.language.substring(0, 2);
      this.$i18n.locale = navigator.language
    }
  }

  activeIndex = '1'
  handleSelect (key:any, keyPath:any) {
    console.log(key, keyPath)
  }

  setLocale (locale:string) {
    this.$i18n.locale = locale
    localStorage.setItem('locale', locale)
  }
}
</script>
<style scoped>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    text-decoration: none;
}
.language {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
</style>
