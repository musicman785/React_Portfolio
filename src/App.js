import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./pages/Portfolio/porfolio";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"


const App = () => {
  return (

    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>


  );
}
export default App;