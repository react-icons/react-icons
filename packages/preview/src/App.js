import React, { Component } from "react";

import { Route, NavLink } from "react-router-dom";
import { Router, Switch } from "react-router";
import { createHashHistory } from "history";

import { IconsManifest, IconContext } from "react-icons";
import * as Icons from "react-icons/all";

import logo from "./react-icons.svg";
import "./App.css";

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

const history = createHashHistory({});

class App extends Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "#333" }}>
        <Router history={history}>
          <div className="App">
            <div className="sidebar">
              <header>
                <img src={logo} alt="react-icons" />
                <span>react-icons</span>
              </header>
              <ul className="links">
                <li>
                  <NavLink to="/" exact={true}>
                    Home
                  </NavLink>
                </li>
                {IconsManifest.map(icon => (
                  <li key={icon.id}>
                    <NavLink to={`/icons/${icon.id}`}>{icon.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="content">
              <Switch>
                <Route path="/" exact={true}>
                  <article>
                    <h1>React Icons</h1>
                    <p>
                      <a
                        href="https://www.npmjs.com/package/react-icons"
                        rel="nofollow"
                      >
                        <img
                          src="https://img.shields.io/npm/v/react-icons.svg"
                          alt="npm"
                        />
                      </a>{" "}
                      <a
                        href="https://travis-ci.com/react-icons/react-icons"
                        rel="nofollow"
                      >
                        <img
                          src="https://travis-ci.com/react-icons/react-icons.svg?branch=master"
                          alt="travis ci"
                        />
                      </a>
                    </p>
                    <p>
                      Include popular icons in your React projects easly with
                      react-icons, which utilizes ES6 imports that allows you to
                      include only the icons that your project is using.
                    </p>
                    <h2>Installation</h2>
                    <code>
                      <pre>npm install react-icons --save</pre>
                    </code>
                    <h2>Usage</h2>
                    <code>
                      <pre>
                        {`import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}`}
                      </pre>
                    </code>
                    <h2>More info</h2>
                    <p>
                      <a href="https://github.com/react-icons/react-icons">
                        Github
                      </a>
                    </p>
                    <p />
                  </article>
                </Route>
                {IconsManifest.map(icon => (
                  <Route key={icon.id} path={`/icons/${icon.id}`}>
                    <article className="icons-article">
                      <h1>{icon.name}</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>License</th>
                            <td>
                              <a href={icon.licenseUrl} target="_blank" rel="noopener noreferrer">
                                {icon.license}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th>Project</th>
                            <td>
                              <a href={icon.projectUrl} target="_blank" rel="noopener noreferrer">
                                {icon.projectUrl}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="example-code">
                        <code>
                          <pre>
                            {`import { ICON_NAME } from "react-icons/${
                              icon.id
                            }";`}
                          </pre>
                        </code>
                      </div>
                      <div className="icons">
                        <IconsView icons={Icons} id={icon.id} />
                      </div>
                    </article>
                  </Route>
                ))}
              </Switch>
            </div>
          </div>
        </Router>
      </IconContext.Provider>
    );
  }
}

export default App;
