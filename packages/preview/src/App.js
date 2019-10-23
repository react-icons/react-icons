import { createHashHistory } from "history";
import React, { useState } from "react";
import { IconsManifest } from "react-icons";
import { Router, Switch } from "react-router";
import { Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import HomePage from "./pages/home";
import IconSetPage from "./pages/iconset";
import SearchPage from "./pages/search";

const history = createHashHistory({});

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <Router history={history}>
      <div className="App">
        <Sidebar searchText={searchText} setSearchText={setSearchText} />
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

            <Route path="/search" exact={true}>
              <SearchPage searchText={searchText} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
