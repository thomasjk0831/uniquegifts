import react, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Items from './components/Items'
import Item from './components/Item'
import LandingPage from './components/LandingPage'
import Cart from './components/Cart'
import { Route, NavLink } from 'react-router-dom'

//
function App() {
  

  return (
    <>
       
      <Route exact path = '/'>
         <Header isLandingPage = {true} />
         <LandingPage />
      </Route>

      <Route exact path = '/items'>
        <Header isLandingPage = {false} />
        <Items />
      </Route>
      
      <Route exact path = '/items/:id'>
        <Header isLandingPage = {false} />
        <Item />
      </Route>
      <Route exact path = '/cart'>
        <Header isLandingPage = {false} />
        <Cart />
      </Route>
      </>
  );
}

export default App;
