import signUp from '../common/signUp/index'
import home from '../common/home/index'

let routers=[
    {path:'/',component:home,exact:true},
    {path:'/signUp',component:signUp}
    
    
]

export default routers