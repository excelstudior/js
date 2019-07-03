import React, { Component,Fragment } from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,ShortCutDiv,ShortCut,NavSearchWrapper,NavSearchIcon} from './style'
class Header extends Component {
    constructor(props){
        super(props);
        this.state = { focused:false }
        this.handleSearchTextBoxOnFocus=this.handleSearchTextBoxOnFocus.bind(this)
        this.handleSearchTextBoxOnBlur=this.handleSearchTextBoxOnBlur.bind(this)
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
                        <NavItem className='right'>Sign Up</NavItem>
                        <NavItem className='right'>Log In</NavItem>
                        <NavSearchWrapper >
                            <NavSearch className={this.state.focused?'focus':''}
                                       onFocus={this.handleSearchTextBoxOnFocus}
                                       onBlur={this.handleSearchTextBoxOnBlur}
                            ></NavSearch>
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
 
export default Header;