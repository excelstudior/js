import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getSubreddit} from './action';
import {Link} from 'react-router-dom';
import {toggleElement} from '../../util';
import {HeaderWrapper,Logo,Nav,NavItem
    ,NavSearch,ShortCutDiv,ShortCut
    ,NavSearchWrapper,NavSearchIcon
    ,Trending,TrendingTitle, TrendingRefresh,TrendingItems,TrendingItem} from './style';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={showTrending:false}
        this.showTrending=this.showTrending.bind(this)
    }
    componentDidMount(){
        this.props.searchSubReddit('nba')
    }

    showTrending=(show)=>{
        this.setState({showTrending:show})
    }

    render() { 
        const {showTrending}=this.state
        const {searchSubReddit,subRedditList}=this.props
        console.log('dd',subRedditList)
        return ( 
            <HeaderWrapper >
            <Logo/>
            <Nav>
                <NavItem className='left active'>HOME</NavItem>
                <NavItem className='left'>ABOUT</NavItem>
                <NavItem className='right'><Link to='/signUp'>SIGN UP</Link></NavItem>
                <NavItem className='right'>LOG IN</NavItem>
                <NavSearchWrapper>                 
                    <NavSearch onFocus={()=>this.showTrending(true)} 
                               ></NavSearch>
                    <NavSearchIcon className='fa fa-search'></NavSearchIcon>
                    <Trending className={showTrending?'':'hide'}>
                        <TrendingTitle>Trending
                            <TrendingRefresh>Refresh</TrendingRefresh>
                        </TrendingTitle>
                        <TrendingItems>
                            <TrendingItem href="http://www.nba.com" target="_blank">NBA</TrendingItem>
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
      subRedditList:state.header.subRedditList
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        searchSubReddit(subReddit){
            dispatch(getSubreddit(subReddit))}
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(Header);