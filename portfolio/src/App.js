import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./pages/Portfolio/porfolio";


const App = () => {
  return (

    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>


  );
}
export default App;