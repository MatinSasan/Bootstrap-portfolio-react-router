import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Index from './components/Pages/Index';
import Team from './components/Pages/Team';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={Index} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/team" component={Team} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
