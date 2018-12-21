import user from '../../api/user'
// initial state
const state = {
  user: {}
}
// getters
const getters = {}
// actions
const actions = {
  getCurrentUser ({commit}) {
    user.getUser((users) => {
      const currentUser = users.find(user => user.id === 1)
      if (currentUser) {
        commit('setUsers', currentUser)
      } else {
        console.log('无用户')
      }
    })
  },
  editPhone ({ commit, state }, users) {
    user.commitPhoneNum(
      users,
      () => commit('setEditable', true),
      () => {
        commit('setEditable', false)
        commit('setPhoneNum', { phone: 123456789 })
      }
    )
  }
}
// mutations
const mutations = {
  setUsers (state, user) {
    state.user = user
    console.log(state.user)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
