import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import FAQ from './FAQ';
import Registry from './Registry';
import Contact from'./Contact';
import About from './About';
import Terms from './Terms';
import ScrollToTop from '../components/UI/ScrollToTop/ScrollToTop';

function App() {
  return(
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/faq" component={FAQ} />
          <Route path="/registry" component={Registry} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />  
        </Switch>      
      </BrowserRouter>
  );
}

export default App;