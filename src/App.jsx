
import './App.scss';

import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <main className="main">
       <NavBar /> 
        <div className="main__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;