import services from '@/http'
import * as types from './mutation-types'
import * as storage from '../storage'

export const ActionDoLogin = ({ dispatch },payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetUser',res.data.user)
    dispatch('ActionSetToken',res.data.token)
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

// export const ActionCheckToken = ({ dispatch, state }) => {
//   if(state.token) {
//     return Promise.resolve(state.token)
//   }

//   const token=storage.getLocalToken()

//   if (!token) {
//     return Promise.reject(new Error('Token inválido'))
//   }

//   dispatch('ActionSetToken',token)
//   return dispatch('ActionLoadSession')
// }

// export const ActionLoadSession = ({ dispatch }) => {
//   return new Promise ( async (resolve,reject) => {
//     try {
//       const { data: { user} } = await services.auth.loadSession
//     } catch (err) {
//       dispatch('ActionSignOut')
//       reject(err)
//     }   
//   })
// }

