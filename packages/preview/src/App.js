import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import * as Icons from "react-icons";

function IconsView({ icons, id }) {
  return Object.keys(icons)
    .filter(name => name.toLocaleLowerCase().startsWith(id))
    .map(name => {
      const Icon = icons[name];
      return (
        <div className="item" key={name}>
          <div className="body">
            <Icon />
          </div>
          <div className="name">{name}</div>
        </div>
      );
    });
}

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
        </p>
        {Icons.IconsManifest.map(icon => (
          <div key={icon.id}>
            <h1>{icon.name}</h1>
            <div className="icons">
              <IconsView icons={Icons} id={icon.id} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
