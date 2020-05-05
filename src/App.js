import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About' 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
