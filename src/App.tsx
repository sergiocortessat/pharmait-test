/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <NavBar />
    </div>
    </BrowserRouter>
  );
}

export default App;
