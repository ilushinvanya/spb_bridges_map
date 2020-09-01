import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      gl_support: null,
      Time: 0, // moment object,
      timing_mode: null,
      bridges_with_params: [],
      yandex_clock: {},
    },
    mutations: {
      setGLSupport(state, bool){
        state.gl_support = bool;
      },
      setBridges(state, array){
        state.bridges_with_params = array;
      },
      setTime(state, payload){
        state.Time = payload;
      },
      setTiming_mode(state, payload){
        state.timing_mode = payload;
      },
      setYandexClock(state, payload){
        state.yandex_clock = payload;
      }
    },
    strict: process.env.DEV
  })

  return Store
}
