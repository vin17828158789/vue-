import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgs: [
      { id: 1, msg: 'iPhone 8P', price: 200, num: 1 ,flag:true},
      { id: 2, msg: 'iPhone E2', price: 100, num: 1 ,flag:true},
      { id: 3, msg: 'iPhone 11', price: 100, num: 1 ,flag:true},
      { id: 4, msg: 'iPhone 12', price: 100, num: 1 ,flag:true},
      { id: 5, msg: 'iPhone 13', price: 100, num: 2 ,flag:true},
      { id: 6, msg: 'iPhone 14', price: 100, num: 2 ,flag:true},
      { id: 7, msg: 'iPhone 13', price: 100, num: 2 ,flag:true},
      { id: 8, msg: 'iPhone 16', price: 100, num: 2 ,flag:true},
      { id: 9, msg: 'iPhone 13', price: 100, num: 2 ,flag:true},
      { id: 10, msg: 'iPhone 13', price: 100, num: 2 ,flag:true},
      { id: 11, msg: 'iPhone 33', price: 100, num: 2 ,flag:true},
      { id: 12, msg: 'iPhone 63', price: 100, num: 2 ,flag:true},
      { id: 13, msg: 'iPhone 13', price: 100, num: 2 ,flag:true},
      { id: 14, msg: 'iPhone 13', price: 100, num: 2 ,flag:true},
    ],
  },
  mutations: {
    // 修改商品信息
    changeMsg(state,newMsg){
      state.msgs = newMsg
    },
    // 显示足迹
    addTrack(state,btnmsg){
      let arr=[...state.msgs]
      arr.forEach(obj=>{
        if(btnmsg==obj.msg){
          // 改变状态
          obj.flag = false
        }
      })
      state.msgs = arr
    },
    // addHistory(state, obj) {
    //   //公司最标准的对象重复判断, indexOF, includs.. SET (它们在判断对象类型时，都可能会问题)
    //   for (let i = 0; i < state.historyArr.length; i++) {
    //       if (state.historyArr[i].id == obj.id) {
    //           //id重复表示此对象在数组中已经存在！删除
    //           state.historyArr.splice(i, 1)
    //           break
    //       }
    //     }
    //     // 把新数据放到数组第一位
    //     state.historyArr.unshift(obj)
    //     console.log(state.historyArr)
    // }
  },
  getters:{
    // 筛选出状态为false的，装在足迹里面
    showList(state){
      let list = [] // 装足迹
      state.msgs.forEach(v=>{
        if( !v.flag && (!list.includes(v.msg)) ){
          list.unshift(v.msg)
        }
      })
      // for(let i=0 ;i<=state.msgs.length ;i++){
      //   if(i == state.msgs[i].id){
      //     list.msgs[i].splice(i,1)
      //     break
      //   }
      //   list.unshift(state.msgs[i])
      // }
      return list
    }
  },
  actions: {
  },
  modules: {
  }
})
