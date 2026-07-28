import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IconContext } from "@react-icons/core";
import { FaFolder } from "@react-icons/fontawesome5_files/FaFolder";
import { GrGrommet } from "@react-icons/grommet-icons_files/GrGrommet";
import { MdAccessibility } from "@react-icons/material-design-icons_files/MdAccessibility";
import { TiArrowDown } from "@react-icons/typicons_files/TiArrowDown";

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
          <IconContext.Provider
            value={{
              color: "blue",
              className: "global-class-name",
              attr: { focusable: "false" },
            }}
          >
            <MdAccessibility />
            <FaFolder
              color="red"
              title="folder icon"
              className="additional-class-name"
            />
          </IconContext.Provider>
          <MdAccessibility />
          <FaFolder />
          <TiArrowDown title="arrow down icon" />
          <GrGrommet />
        </p>
      </div>
    );
  }
}

export default App;
