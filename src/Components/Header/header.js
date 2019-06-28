import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="Header">
            <nav className='navbar navbar-custom'>
                <div className='navbar-header'>
                    <a href="javascript:;" className='navbar-brand'></a>
                </div>
                <ul className='nav navbar-nav navbar-right'>
                    <li><i className='fa fa-yelp'></i>Sales</li>
                    <li><Link to='/User'><i className='fa fa-user'>User</i></Link></li>
                    <li><i className='fa fa-bell'></i><span className='badge'>20</span></li>
                    <li><i className='fa fa-sign=out'></i>Logout</li>
                </ul>
            </nav>
        </div> )
    }
}
 
export default Header;