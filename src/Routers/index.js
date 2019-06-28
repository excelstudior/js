import Home from '../Pages/Home';
import UserList from '../Pages/User/UserList';
import User from '../Pages/User/User';
import Course from '../Pages/Course/Course';
import CourseCategory from '../Pages/Course/CourseCategory';
import CourseList from '../Pages/Course/CourseList';


let routes=[
    {path:'/Home' ,component:Home,exact:true },
    {path:'/UserList' ,component:UserList},
    {path:'/User',component:User},
    {path:'/Course',component:Course},
    {path:'/CourseCategory',component:CourseCategory},
    {path:'/CourseList',component:CourseList}
]

export default routes;