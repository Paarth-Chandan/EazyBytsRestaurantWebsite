import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import ReactModal from 'react-modal';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
