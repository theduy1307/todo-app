import { StateType } from '@/types'
import { Component, Vue } from 'vue-property-decorator'
import { ActionContext } from 'vuex'
import { Action, Getter } from 'vuex-class'

@Component
export default class Counter extends Vue {
    // getters
    @Getter currentCount!: number;
    @Getter previousCount!: number;
    @Getter nextCount!: number;

    // actions
    @Action increment!: ActionContext<StateType, StateType>;
    @Action decrement!: ActionContext<StateType, StateType>;
}
