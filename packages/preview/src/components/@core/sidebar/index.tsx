import { ALL_ICONS } from "@utils/icon";
import { Context } from "@utils/search-context";
import { useRouter } from "next/router";
import React, { useState } from "react";

import ActiveLink from "../active-link";
import Heading from "../heading";

const searchPath = "/search";

export default function Sidebar() {
  const iconsList = ALL_ICONS.sort((a, b) => (a.name > b.name ? 1 : -1));
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { query, setQuery, setResults } = React.useContext(Context);

  const onSearch = e => {
    const query = e.target.value.toLowerCase();
    router.push({ pathname: searchPath, query: { q: query } });
    setQuery(query);
    setResults(prevResult => {
      return {}
    });
  };

  const goToSearch = e => {
    if (!router.asPath.includes(searchPath)) router.push(searchPath);
  };

  const onBlur = event => {
    if (event.target.value.length === 0) {
      window && window.history.back();
    }
  };

  return (
    <div className="sidebar pt3">
      <Heading isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="search p2">
        <input
          type="text"
          aria-label="search"
          className="px2 py1"
          placeholder="🔍 Search Icons"
          onFocus={goToSearch}
          onBlur={onBlur}
          onChange={onSearch}
          value={query}
        />
      </div>

      <ul className={`sidebar--links ${isOpen && "active"}`}>
        <li>
          <ActiveLink href="/">
            <a className="rounded px2 py1">Home</a>
          </ActiveLink>
        </li>
        {iconsList.map(icon => (
          <li key={icon.id}>
            <ActiveLink href={{ pathname: "icons", query: { name: icon.id } }}>
              <a className="rounded px2 py1">{icon.name}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
