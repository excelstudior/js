import styled from 'styled-components';
import bitcoin50 from '../../../public/img/bitcoin_50.png';
export const HeaderWrapper=styled.div`
        position:relative;
        height:56px;
        font-family:Arial, Helvetica, sans-serif;
        border-bottom:1px solid #f0f0f0;
        `;
export const Logo=styled.a.attrs({
    href:'./'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:56px;
    height:56px;
    background:url(${bitcoin50});
    background-repeat:no-repeat;
    background-size:contain;
`;
export const Nav=styled.div`
    width:680px;padding-right:70px;box-sizing:border-box;
    height:100%;
    margin:0 auto 0 56px;
`;
export const NavItem=styled.div`
    line-height:56px;
    padding:0px 15px;
    font-size:14px;
    color:#333;
    &:hover{
        background-color:#f0f0f0;
    }
    &.left{float:left;}
    &.right{float:right;color:#969696}
    &.active{color:#ea6f5a}

`
export const NavSearchWrapper=styled.div`
    color:#777;
    position:relative;
    float:left;
`
export const NavSearchIcon=styled.i`
    color:#777;
    margin-left:-29px;
`

export const NavSearch=styled.input.attrs({
    placeholder:'Search in Reddit'
})`
    width:180px;padding:0px 15px;box-sizing:border-box;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    margin-left:15px;
    padding-right:30px;
    background:#f0f0f0;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &:focus{
        width:250px;
        transition:all .2s ease;
    }
    &:not(:focus){
        width:180px;
        transition:all .2s ease;
    }
`

export const ShortCutDiv=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
    font-size:14px;
`
export const ShortCut=styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:15px;
    padding:0px 15px;
    border-radius:19px;
    border:1px solid #ec6149;
    &.nba{color:#ec6149;}
    &.espn{color:#fff;background:#ec6149}
`
export const Trending=styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:340px;
    height:200px;
    overflow-Y:scroll;
    padding:0 20px;
    background:white;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    &.hide{
        display:none;
    }
`
export const TrendingTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const TrendingRefresh=styled.span`
    float:right;
    font-size:12px;
`
export const TrendingItems=styled.div`
    font-size:13px;
`
export const TrendingItem=styled.a`
    display:block;
    padding:2px 5px;
    line-height:15px;
    margin-bottom:15px;
    margin-right:10px;
`