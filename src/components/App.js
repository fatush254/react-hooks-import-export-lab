// src/App.js
import React from 'react';

import About from './About';

import Home from './Home.js';
import NavBar from './NavBar.js';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;