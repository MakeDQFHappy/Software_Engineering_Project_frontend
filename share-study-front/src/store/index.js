import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken:localStorage.getItem('userToken')?localStorage.getItem('userToken'):'',
    userId:localStorage.getItem('userId')?localStorage.getItem('userId'):'',
    age:localStorage.getItem('age')?localStorage.getItem('age'):'',
    userName:localStorage.getItem('userName')?localStorage.getItem('userName'):'',
    userAvatar:localStorage.getItem('userAvatar')?localStorage.getItem('userAvatar'):'',
  },
  getters: {
  },
  mutations: {
    changeLogin(state,user){
      state.userToken=user.userToken
      localStorage.setItem('userToken',user.userToken)
    }
  },
  actions: {
  },
  modules: {
  }
})
