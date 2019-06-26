import React, { Component } from 'react';
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
                                <a href="/" className='active'>
                                    <i className='fa fa-area-chart'></i>
                                    Date Analyse
                                </a>
                            </li>
                            <li>
                                <a href="index.html" className='active'>
                                    <i className='fa fa-area-chart'></i>
                                    Date Analyse
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
         )
    }
}
 
export default Aside