import React, { PureComponent,Fragment } from 'react';
import PropTypes from 'prop-types';
// use PureComponent to prevent excessive rendering, render only when prop changes
class ServiceItem extends PureComponent {
    state = {  }
    render() { 
        const {list,removeService}=this.props
        return ( 
            <Fragment>
                {list.length<1?<p>there is nothing in the list</p>:<ul>{
                        list.map((item,index)=>{
                            if(item!='')
                            return (<li key={index+item}
                                        value={index}
                                        onClick={removeService}
                                        dangerouslySetInnerHTML={{__html:item}}></li>)
                        })
                    }
                 </ul>}
            </Fragment>
         )
    }
}
// Check PropTypes in offical doc
ServiceItem.propTypes={
    list:PropTypes.array,
    removeService:PropTypes.func
}
ServiceItem.defaultProps={
    list:['Unknown']
}
 
export default ServiceItem;