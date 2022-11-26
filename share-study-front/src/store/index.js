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
    sex:localStorage.getItem('sex')?localStorage.getItem('sex'):'',
    bonusPoints:localStorage.getItem('bonusPoints')?localStorage.getItem('bonusPoints'):'',
    userType:localStorage.getItem('userType')?localStorage.getItem('userType'):'',
  },
  getters: {
  },
  mutations: {
    changeLogin(state,user){
      state.userToken=user.userToken
      state.userId=user.userId
      state.userAvatar=user.userAvatar
      state.userName=user.userName
      state.sex=user.sex
      state.userType=user.userType
      state.bonusPoints=user.bonusPoints
      state.age=user.age
      localStorage.setItem('userId',user.userId)
      localStorage.setItem('userToken',user.userToken)
      localStorage.setItem('userAvatar',user.userAvatar)
      localStorage.setItem('userName',user.userName)
      localStorage.setItem('sex',user.sex)
      localStorage.setItem('userType',user.userType)
      localStorage.setItem('bonusPoints',user.bonusPoints)
      localStorage.setItem('age',user.age)
    },
    changeAvatar(state,newAvatar){
      state.userAvatar=newAvatar
      localStorage.setItem('userAvatar',newAvatar)
    },
    delLogin(){
      localStorage.clear();
    },
    setId(state,user){
      state.userId=user.id
      
      localStorage.setItem('userId',user.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
