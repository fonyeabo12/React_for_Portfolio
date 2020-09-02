import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
     <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
