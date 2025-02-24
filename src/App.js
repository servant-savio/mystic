import React from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from './Header';
import Nav from './Nav';
import './App.css';
import MainBody from './MainBody';
import PreLoad from './PreLoad';

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      const params = new URLSearchParams(location.search);
      const refPath = params.get("ref");

      if (refPath) {
          navigate(refPath, { replace: true });
      }
  }, [location, navigate]);

  return null; // No UI needed, just performs redirection
}

function App() {
  return (
    <Router>
      <RedirectHandler />
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