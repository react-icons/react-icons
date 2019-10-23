import "./sidebar.scss";

import React from "react";
import { IconsManifest } from "react-icons";
import { NavLink, useHistory } from "react-router-dom";

import Search from "../../store/search";
import Header from "./header";

function Sidebar() {
  const SearchStore = Search.useContainer();
  const history = useHistory();

  const onSearch = event => {
    SearchStore.setText(event.target.value);
  };

  const onBlur = event => {
    if (event.target.value.length === 0) {
      history.goBack();
    }
  };

  return (
    <div className="sidebar">
      <Header />
      <NavLink to="/search" className="search">
        <input
          type="text"
          value={SearchStore.text}
          onChange={onSearch}
          onBlur={onBlur}
          placeholder="Search Icons"
        />
      </NavLink>
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
  );
}

export default Sidebar;
