import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logIn, logOut, getItems } from '../actions/index'

function Header(props) {
  const logo = "../img/logo.png"

  useEffect(() => {
    if (localStorage.user_id)
      props.logIn()
  }, [])



  //here to make sure user is still logged in if user refreshes page

  const handleLogOut = () => {
    window.localStorage.clear()
    props.logOut()
  }

  return (
    <header>
      <div className={props.isLandingPage === true ? "headerBackground" : null}>
        <nav className="aboutHeaderContainer">
          <div className="logo">
            <img src={logo} alt={"logo"} />
          </div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/items'>Shop</NavLink>
          <NavLink to='/cart'>Cart {props.cart.length ? <span className="count">{props.cart.reduce((a, c) => a + c.quantity, 0)}</span> : null}</NavLink>
          {/* {props.isLandingPage === true?<a href="#about">About</a>: <NavLink to = '/'>About</NavLink> } */}
          {

            props.isLoggedIn ? <a className="link-log-out" href="" onClick={handleLogOut}>Logout</a> : <NavLink to="/login">LogIn</NavLink>
          }


        </nav>
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    isLoggedIn: state.isLoggedIn
  }
}
export default connect(mapStateToProps, { logIn, logOut, getItems })(Header)
