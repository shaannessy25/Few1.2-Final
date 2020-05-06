import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import New from './components/New'; 
import CustomNavbar from './components/CustomNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/new' component={New} />
      </div>
    </Router>
  );
}

export default App;
