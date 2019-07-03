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
    width:100px;
    height:56px;
    background:url(${bitcoin50});
    background-repeat:no-repeat;
    background-size:contain;
`;
export const Nav=styled.div`
    width:960px;padding-right:70px;box-sizing:border-box;
    height:100%;
    margin:0 auto;
`;
export const NavItem=styled.div`
    line-height:56px;
    padding:0px 15px;
    font-size:17px;
    color:#333;
    &.left{float:left;}
    &.right{float:right;color:#969696}
    &.active{color:#ea6f5a}

`
export const NavSearchWrapper=styled.div`
    color:#777;
`
export const NavSearchIcon=styled.i`
    color:#777;
    margin-left:-29px;
`

export const NavSearch=styled.input.attrs({
    placeholder:'Find'
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
    font-size:17px;
    &::placeholder{
        color:#999;
    }
    &.focus{
        width:250px;
    }
`
export const ShortCutDiv=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
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
