import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {setFocused} from './action';
import {Link} from 'react-router-dom';
import {HeaderWrapper,Logo,Nav,NavItem
    ,NavSearch,ShortCutDiv,ShortCut
    ,NavSearchWrapper,NavSearchIcon} from './style'

class Header extends Component {
    constructor(props){
        super(props);
        //this.state = { focused:false }
        // this.handleSearchTextBoxOnFocus=this.handleSearchTextBoxOnFocus.bind(this)
        // this.handleSearchTextBoxOnBlur=this.handleSearchTextBoxOnBlur.bind(this)
    }
    
    handleSearchTextBoxOnFocus(){
        this.setState({
            focused:true
        })
    }

    handleSearchTextBoxOnBlur(){
        this.setState({
            focused:false
        })
    }
    
    render() { 
        return ( 
            
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className='left active'>Home</NavItem>
                        <NavItem className='left'>About</NavItem>
                        <NavItem className='right'><Link to='/signUp'>Sign Up</Link></NavItem>
                        <NavItem className='right'>Log In</NavItem>
                        <NavSearchWrapper >
                            <CSSTransition timeout={200} in={this.props.focused} classNames='searchBox'>
                            <NavSearch className={this.props.focused?'focus':''}
                                     onFocus={()=>this.props.setSearchBoxFocused(true)}
                                     onBlur={()=>this.props.setSearchBoxFocused(false)}
                            ></NavSearch>
                            </CSSTransition>
                            <NavSearchIcon className='fa fa-search'></NavSearchIcon>
                        </NavSearchWrapper>
                            
                        
                        
                    </Nav>
                    <ShortCutDiv>
                        <ShortCut className='espn'>ESPN</ShortCut>
                        <ShortCut className='nba'>NBA</ShortCut>
                    </ShortCutDiv>
                </HeaderWrapper>
           
            
         )
    }
}
 
const mapStateToProps=(state)=>{
    return{
        focused:state.focused
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        setSearchBoxFocused(value){
            console.log(value)
            dispatch(setFocused(value))}
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(Header);