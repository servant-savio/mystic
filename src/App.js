import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import './App.css';
import MainBody from './MainBody';
import PreLoad from './PreLoad';

function App() {
  return (
    <Router>
      <div className="App">
        <PreLoad />
        <Header />
        <Nav />
        <MainBody />
      </div>
    </Router>
  );
}

export default App; 