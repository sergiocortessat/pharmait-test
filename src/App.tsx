import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import VendorDetails from './Components/VendorDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/dashboard/:vendor" component={VendorDetails} />
          <Route exact path="/" component={Home} />
        </Switch>
        <h2>{process.env.REACT_APP_NAME}</h2>
        <h2>Testing further</h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
