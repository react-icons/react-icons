import "./search.scss";

import React from "react";
import * as icons from "react-icons/all";
import { useHistory } from "react-router-dom";

import Search from "../../store/search";
import SearchResults from "./search-results";

function SearchPage() {
  const SearchStore = Search.useContainer();
  const history = useHistory();

  const closeSearch = () => {
    history.goBack();
  };

  return (
    <article>
      <button
        className="btn-close"
        aria-label="Close Search"
        onClick={closeSearch}
      >
        &#x2715;
      </button>
      {SearchStore.text.length > 2 ? (
        <>
          <h1>
            <span role="img" aria-label="Magnifying Glass">
              🔍
            </span>
            Search: <i>{SearchStore.text}</i>
          </h1>
          <SearchResults icons={icons} query={SearchStore.text} />
        </>
      ) : (
        <h1>Please enter at least 3 characters to search...</h1>
      )}
    </article>
  );
}

export default SearchPage;
