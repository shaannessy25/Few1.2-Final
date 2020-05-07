import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import New from './components/New'; 
import CustomNavbar from './components/CustomNavbar';
import Tour from './components/Tour'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/new' component={New} />
        <Route path='/tour' component={Tour} />
      </div>
    </Router>
  );
}

export default App;
