import "./sidebar.scss";

import React from "react";
import { IconsManifest } from "react-icons";
import { NavLink, useHistory } from "react-router-dom";

import Header from "./header";

function Sidebar({ searchText, setSearchText }) {
  const history = useHistory();

  const onSearch = event => {
    setSearchText(event.target.value);
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
          value={searchText}
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
