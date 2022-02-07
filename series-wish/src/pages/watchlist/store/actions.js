import services from '@/http'
import * as types from './mutation-types'


export const ActionFindWatchlist = ({ commit }) => {
  console.log(services)
    services.watchlist.findWatchlist().then(res => {
      console.log(res.data)
    commit(types.SET_WATCHLIST,res.data.data)
  })
}
