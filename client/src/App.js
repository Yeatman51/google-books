import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/save" component={Save} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    
    </div>
  );
}

export default App;
