import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {setFocused} from './action';
import {Link} from 'react-router-dom';
import {HeaderWrapper,Logo,Nav,NavItem
    ,NavSearch,ShortCutDiv,ShortCut
    ,NavSearchWrapper,NavSearchIcon} from './style';


class Header extends Component {
    constructor(props){
        super(props);
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
                    <NavSearch></NavSearch>
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

// state of header sits in main state tree, header node 
const mapStateToProps=(state)=>{
    return{
        focused:state.header.focused
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        setSearchBoxFocused(value){
            dispatch(setFocused(value))}
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(Header);