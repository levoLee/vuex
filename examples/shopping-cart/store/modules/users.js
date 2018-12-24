import user from '../../api/user'
// initial state
const state = {
  user: {},
  editable: false
}
// getters
const getters = {}
// actions
const actions = {
  getCurrentUser ({ commit }) {
    user.getUser((users) => {
      const currentUser = users.find(user => user.id === 1)
      if (currentUser) {
        commit('setUsers', currentUser)
        state.editable = true
      } else {
        console.log('无用户')
      }
    })
  },
  editPhone ({ commit, state }, users) {
    user.commitPhoneNum(
      users,
      () => {
        commit('setEditable', true)
        commit('setPhoneNum', { phone: Math.random() })
      },
      () => {
        alert('手机修改失败')
      }
    )
  }
}
// mutations
const mutations = {
  setUsers (state, user) {
    state.user = user
  },
  setEditable (state, boolean) {
    state.editable = boolean
  },
  setPhoneNum (state, obj) {
    state.user.phone = obj.phone
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
