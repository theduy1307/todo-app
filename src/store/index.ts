import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { StateType } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    tasks: []
  },
  getters: {
    currentCount (state: StateType): number {
      return state.count
    },
    previousCount (state: StateType): number {
      return state.count - 1
    },
    nextCount (state: StateType): number {
      return state.count + 1
    },
    tasks (state: StateType):any {
      state.tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      return state.tasks
    }
  },
  mutations: {
    increment (state: StateType): void {
      state.count++
    },
    decrement (state: StateType): void {
      state.count--
    },
    deleteTask (state: StateType, idx:number) {
      state.tasks.splice(idx, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    addTask (state:StateType, payload:any) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeStatus (state:any, id:number) {
      const item = state.tasks.filter((x: any) => x.id === id)[0]
      item.status = !item.status
      console.log(item)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeLevel (state:any, id:any) {
      const item = state.tasks.find((x:any) => x.id === id)
      if (String(item.level) === '3') {
        item.level = '1'
      } else {
        const newLevel = Number(item.level) + 1
        item.level = String(newLevel)
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    increment (ctx: ActionContext<StateType, StateType>): void {
      ctx.commit('increment')
    },
    decrement (ctx: ActionContext<StateType, StateType>): void {
      ctx.commit('decrement')
    },
    deleteTask ({ commit }, idx: number) {
      commit('deleteTask', idx)
    },
    addTask ({ commit }, payload: any) {
      commit('addTask', payload)
    },
    changeStatus ({ commit }, id: number) {
      commit('changeStatus', id)
    },
    changeLevel ({ commit }, id: number) {
      commit('changeLevel', id)
    }
  },
  modules: {}
})
