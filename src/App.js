import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile"
import Project from "./components/Project"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Technologies from "./components/Technologies"


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
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
