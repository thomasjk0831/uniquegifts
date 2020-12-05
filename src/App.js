import react, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Items from './components/Items'
import Item from './components/Item'
import LandingPage from './components/LandingPage'
import Cart from './components/Cart'
import Login from './components/Login'
import { Route, NavLink } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
//
function App() {


  return (
    <>

      <Route exact path='/'>
        <Header isLandingPage={true} />
        <LandingPage />
      </Route>

      <Route exact path='/items'>
        <Header isLandingPage={false} />
        <Items />
      </Route>

      <Route exact path='/items/:id'>
        <Header isLandingPage={false} />
        <Item />
      </Route>
      <Route exact path='/cart'>
        <Header isLandingPage={false} />
        <ToastProvider>

          <Cart />
        </ToastProvider>
      </Route>
      <Route exact path="/login">
        <Header isLandingPage={false} />
        <Login />
      </Route>
    </>
  );
}

export default App;
