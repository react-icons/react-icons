import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export function GenIcon(data) {
  return props => (
    <IconBase viewBox={data.viewBox} {...props}>
      {data.path.map((path, index) => <path key={index} {...path} />)}
    </IconBase>
  );
}
export function IconBase(props) {
  const computedSize = props.size || "1em";
  return (
    <svg
      style={props.style}
      viewBox={props.viewBox}
      height={computedSize}
      width={computedSize}
    >
      {props.children}
    </svg>
  );
}
const MdAccessibility = GenIcon(Icon.MdAccessibility);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <MdAccessibility />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
