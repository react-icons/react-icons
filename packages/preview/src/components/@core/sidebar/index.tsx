import { ALL_ICONS } from "@utils/icon";
import { Context } from "@utils/search-context";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import ActiveLink from "../active-link";
import Heading from "../heading";

const searchPath = "/search";

export default function Sidebar() {
  const iconsList = ALL_ICONS.sort((a, b) => (a.name > b.name ? 1 : -1));
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const { query, setQuery, setResults } = React.useContext(Context);

  const setQueryEveywhere = (query) => {
    setQuery(query); // Context
    setInputQuery(query); // State for this component
  };

  const onSearch = (e) => {
    const query = e.target.value.toLowerCase();
    router.push({ pathname: searchPath, query: query ? { q: query } : null });
    setQueryEveywhere(query);
    setResults((prevResult) => {
      return {};
    });
  };

  const goToSearch = (e) => {
    if (!router.asPath.includes(searchPath)) router.push(searchPath);
  };

  const onBlur = (event) => {
    if (event.target.value.length === 0) {
      window && window.history.back();
    }
  };

  useEffect(() => {
    const searchNode = searchRef.current;

    const onKeyPress = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;

      // To avoid switching focus when the user is typing in input fields
      const isInputElement =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement;

      if (!isInputElement && e.key === "/") {
        searchNode?.focus();
      }
    };

    document.addEventListener("keyup", onKeyPress);

    return () => {
      document.removeEventListener("keyup", onKeyPress);
    };
  }, []);

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
          ref={searchRef}
          value={inputQuery !== null ? inputQuery : query}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>

      <ul className={`sidebar--links ${isOpen && "active"}`}>
        <li>
          <ActiveLink href="/">
            <a className="rounded px2 py1">Home</a>
          </ActiveLink>
        </li>
        {iconsList.map((icon) => (
          <li key={icon.id}>
            <ActiveLink href={{ pathname: "icons", query: { name: icon.id } }}>
              <a
                className="rounded px2 py1"
                onClick={(e) => setQueryEveywhere("")}
              >
                {icon.name}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
