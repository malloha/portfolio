import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (

      <div className="App" >
        <div className="opac">

          <div className="back">
            <Header />
            <Profile />
          </div>
          <Project />
          <Technologies />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
