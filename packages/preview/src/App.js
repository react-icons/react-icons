import loadable from "@loadable/component";
import { createHashHistory } from "history";
import React from "react";
import { IconsManifest } from "react-icons";
import { Router, Switch } from "react-router";
import { Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import HomePageLoading from "./loading/home";
import IconsetPageLoading from "./loading/iconset";
import Search from "./store/search";

const HomePage = loadable(() => import("./pages/home"), {
  fallback: <HomePageLoading />
});

<<<<<<< HEAD
const IconSetPage = loadable(() => import("./pages/iconset"), {
  fallback: <IconsetPageLoading />
});
=======
function IconsView({ icons, id }) {
  return Object.keys(icons)
    .filter(name => name.toLocaleLowerCase().startsWith(id))
    .map(name => renderIcon(icons[name], name));
}

function FilterView({ icons, query }) {
  return Object.keys(icons)
      .filter(name => name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      .map(name => renderIcon(icons[name], name));
}

function renderIcon(icon, name) {
  return (
      <div className="item" key={name}>
        <div className="body">{icon()}</div>
        <div className="name">{name}</div>
      </div>
);
}
>>>>>>> 21c6f1764e0307960733a3edf14bc1879810870d

const SearchPage = loadable(() => import("./pages/search"));

<<<<<<< HEAD
const history = createHashHistory({});
=======
class App extends Component {
  state = {
    query: ""
  };

  handleSearch = query => {
    this.setState({query});
  };

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
                <li>
                  <NavLink to="/search" className="search">
                    <input
                        type="text"
                        value={this.state.query || ""}
                        onChange={event => this.handleSearch(event.target.value)}
                        placeholder="Search"
                    />
                  </NavLink>
                </li>
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
>>>>>>> 21c6f1764e0307960733a3edf14bc1879810870d

function App() {
  return (
    <Search.Provider>
      <Router history={history}>
        <div className="App">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/" exact={true}>
                <HomePage />
              </Route>

              {IconsManifest.map(icon => (
                <Route key={icon.id} path={`/icons/${icon.id}`}>
                  <IconSetPage icon={icon} />
                </Route>
<<<<<<< HEAD
              ))}

              <Route path={`/loading/`}>
                <HomePageLoading />
              </Route>

              <Route path="/search" exact={true}>
                <SearchPage />
              </Route>
            </Switch>
=======
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
                <Route path="/search" exact={true}>
                  <article>
                    {this.state.query.length && this.state.query.length >= 3 ? (
                        <div className="icons">
                          <FilterView icons={Icons} query={this.state.query} />
                        </div>
                    ) : (
                        <div>Enter at least 3 characters to search...</div>
                    )}
                  </article>
                </Route>

              </Switch>
            </div>
>>>>>>> 21c6f1764e0307960733a3edf14bc1879810870d
          </div>
        </div>
      </Router>
    </Search.Provider>
  );
}

export default App;
