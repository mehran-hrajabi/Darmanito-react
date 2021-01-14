import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './home';
import FAQ from './faq';
import Contact from'./contact';
import Registry from './registry';
import Terms from './terms';
import ScrollToTop from '../components/UI/ScrollToTop';

function App() {
  return(
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/registry" component={Registry} />
          <Route path="/terms" component={Terms} />  
        </Switch>      
      </BrowserRouter>
  );
}

export default App;