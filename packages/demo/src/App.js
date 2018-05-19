import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import * as Icon from "react-icons-set/module/md/data";
import { GenIcon } from "react-icons-set/module/IconBase";

const MdAccessibility = GenIcon(Icon.MdAccessibility);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <MdAccessibility />
        </p>
      </div>
    );
  }
}

export default App;
