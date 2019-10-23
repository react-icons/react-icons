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

const IconSetPage = loadable(() => import("./pages/iconset"), {
  fallback: <IconsetPageLoading />
});

const SearchPage = loadable(() => import("./pages/search"));

const history = createHashHistory({});

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
              ))}

              <Route path={`/loading/`}>
                <HomePageLoading />
              </Route>

              <Route path="/search" exact={true}>
                <SearchPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Search.Provider>
  );
}

export default App;
