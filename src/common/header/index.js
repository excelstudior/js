import React, { Component,Fragment } from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,ShortCutDiv,ShortCut} from './style'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className='left active'>Home</NavItem>
                        <NavItem className='left'>About</NavItem>
                        <NavItem className='right'>Sign Up</NavItem>
                        <NavItem className='right'>Log In</NavItem>
                        <NavSearch></NavSearch>
                    </Nav>
                    <ShortCutDiv>
                        <ShortCut className='espn'>ESPN</ShortCut>
                        <ShortCut className='nba'>NBA</ShortCut>
                    </ShortCutDiv>
                </HeaderWrapper>
           
            
         )
    }
}
 
export default Header;