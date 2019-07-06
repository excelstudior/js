import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {setFocused} from './action';
import {Link} from 'react-router-dom';
import {HeaderWrapper,Logo,Nav,NavItem
    ,NavSearch,ShortCutDiv,ShortCut
    ,NavSearchWrapper,NavSearchIcon
    ,Trending,TrendingTitle, TrendingRefresh,TrendingItems,TrendingItem} from './style';


class Header extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>HOME</NavItem>
                <NavItem className='left'>ABOUT</NavItem>
                <NavItem className='right'><Link to='/signUp'>SIGN UP</Link></NavItem>
                <NavItem className='right'>LOG IN</NavItem>
                <NavSearchWrapper >                 
                    <NavSearch></NavSearch>
                    <NavSearchIcon className='fa fa-search'></NavSearchIcon>
                    <Trending>
                        <TrendingTitle>Trending
                            <TrendingRefresh>Refresh</TrendingRefresh>
                        </TrendingTitle>
                        <TrendingItems>
                            <TrendingItem>Item1</TrendingItem>
                            <TrendingItem>Item1</TrendingItem>
                            <TrendingItem>Item1</TrendingItem>
                            <TrendingItem>Item122</TrendingItem>
                            <TrendingItem>Item1</TrendingItem>
                            <TrendingItem>Item1</TrendingItem>
                            <TrendingItem>Item1</TrendingItem>
                            <TrendingItem>Item1</TrendingItem>
                        </TrendingItems>
                    </Trending>
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