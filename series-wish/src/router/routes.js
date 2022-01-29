import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages'


export default [ 
  ...auth,
  ...home
  
]