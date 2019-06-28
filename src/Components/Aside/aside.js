import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Aside extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='aside'>
                <div className='profile'>
                    <div className='avatar img-circle'>
                        <img src=''/>
                    </div>
                    <h4>Ray</h4>
                    <div className='navs'>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to="/Home" className='active'>
                                    <i className='fa fa-area-chart'></i>
                                    Date Analyse
                                </Link>
                            </li>
                            <li>
                                <Link to ="/UserList" className='active'>
                                    <i className='fa fa-user'></i>
                                    User Management
                                </Link>
                            </li>
                            <li>
                                <Link>
                                <i className='fa fa-object-group'></i>
                                Course Management
                                <i className='arrow fa fa-angle-right'></i>
                                </Link>
                                <ul className='list-unstyled'>
                                    <li>
                                        <Link to='/Course'>
                                        <i className='fa fa-plus'>
                                            New Course
                                        </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/CourseList'>
                                        <i className='fa fa-list'>
                                            Courses
                                        </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/CourseCategory'>
                                        <i className='fa fa-tags'>
                                            Course Category
                                        </i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
         )
    }
}
 
export default Aside