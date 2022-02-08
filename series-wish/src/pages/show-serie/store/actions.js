import services from '@/http'
import * as types from './mutation-types'


export const ActionFindSerie = ({ commit }) => {
  console.log(services)
    services.showSerie.FindSerie().then(res => {
      console.log(res.data)
    commit(types.SET_SERIE,res.data.data)
  })
}
