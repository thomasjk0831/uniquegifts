import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Header(props) {
    const logo = "../img/logo.png"

    
    
    return (
        <header>
            <div className = {props.isLandingPage === true?"headerBackground":null}>
            <nav className="aboutHeaderContainer">
                <div className="logo">
                  <img src={logo} alt={"logo"} />
                </div>
                  <NavLink to = '/'>Home</NavLink>
                  <NavLink to = '/items'>Shop</NavLink>
                   <NavLink to = '/cart'>Cart {props.cart.length?<span className ="count">{props.cart.reduce((a,c)=>a+c.quantity,0)}</span>:null}</NavLink>
                   {props.isLandingPage === true?<a href="#about">About</a>: <NavLink to = '/'>About</NavLink> }
                  
                 
              </nav>
            </div>
        </header>
    )
}

function mapStateToProps(state){
  return {
    cart : state.cart
  }
}
export default connect(mapStateToProps, {})(Header)
