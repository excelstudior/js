import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getSubreddit} from './action';
import {Link} from 'react-router-dom';
//import {toggleElement} from '../../util';
import {HeaderWrapper,Logo,Nav,NavItem
    ,NavSearch,ShortCutDiv,ShortCut
    ,NavSearchWrapper,NavSearchIcon
    ,Trending,TrendingTitle, TrendingRefresh,TrendingItems,TrendingItem} from './style';


const SearchResult=({searchSubreddit,subRedditList})=>{
    return(
        <Trending id='Trending' className='hide' >
        <TrendingTitle>Trending
            <TrendingRefresh onClick={()=>searchSubreddit()}>Refresh</TrendingRefresh>
        </TrendingTitle>
        <TrendingItems>
            {subRedditList.map((item,index)=>{
                return <TrendingItem key={item.title} 
                                     href={item.url} 
                                     title={item.title}
                                     target='_blank'
                                     >{(item.title).substring(0,40)+'...'}                                                    
                       </TrendingItem>
            })}
        </TrendingItems>
    </Trending>
    )
}

class Header extends Component {
    constructor(props){
        super(props);
        this.searchSubreddit=this.searchSubreddit.bind(this)
        this.searchText=React.createRef()
        
    }

    searchSubreddit(){
        this.props.searchSubReddit(this.searchText.current.value)
    }
    render() { 
       
        const {subRedditList}=this.props
        console.log('dd',subRedditList)
        return ( 
            <HeaderWrapper >
            <Logo/>
            <Nav>
                <NavItem className='left active'><Link to='/'>HOME</Link></NavItem>
                <NavItem className='left'>ABOUT</NavItem>
                <NavItem className='right'><Link to='/signUp'>SIGN UP</Link></NavItem>
                <NavItem className='right'>LOG IN</NavItem>
                <NavSearchWrapper id='NavSearchWrapper'>                 
                    <NavSearch ref={this.searchText} onChange={()=>this.searchSubreddit()}
                               ></NavSearch>
                    <NavSearchIcon className='fa fa-search'></NavSearchIcon>
                   <SearchResult searchSubreddit={this.searchSubreddit} subRedditList={subRedditList} />
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