import React, { Component } from 'react';
import '../../../public/css/nav.css'

class Nav extends Component {
    state = {  }
    render() { 
        return ( <div id='nav'>
            <ul>
                <li>Home</li>
                <li>NBA</li>
            </ul>
        </div> )
    }
}
 
export default Nav;