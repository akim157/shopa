import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     // counter: 0
    // },
    // mutations: {
    //     // changeCounter (state, payload) {
    //     //     state.counter += payload
    //     // }
    // },
    // actions: {
    //     // asyncChangeCounter (context, payload) {
    //     //     setTimeout(() => {
    //     //         context.commit('changeCounter', payload.counterValue)
    //     //     }, payload.timeoutDelay)
    //     // }
    // },
    // getters: {
    //     // computedCounter (state) {
    //     //     return state.counter * 7
    //     // }
    // }
    modules: {
        counter
    },
    state: {
        title: 'Hello'
    },
    getters: {
        title (state) {
            return state.title + '!!!'
        }
    }
})