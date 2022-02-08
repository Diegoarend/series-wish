import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/home'
import { routes as watchlist } from '../pages/watchlist'
import { routes as showserie } from '../pages/show-serie'


export default [ 
  ...auth,
  ...home,
  ...watchlist,
  ...showserie
  
]