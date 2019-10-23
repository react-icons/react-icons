import "./search.scss";

import React from "react";
import { IconsManifest } from "react-icons";
import { useHistory } from "react-router-dom";

import SearchResults from "./search-results";

function SearchPage({ searchText }) {
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
      {searchText.length > 2 ? (
        <>
          <h1>
            <span role="img" aria-label="Magnifying Glass">
              🔍
            </span>
            Search: <i>{searchText}</i>
          </h1>
          <div class="icons">
            {IconsManifest.map(icon => (
              <SearchResults iconsId={icon.id} query={searchText} />
            ))}
          </div>
        </>
      ) : (
        <h1>Please enter at least 3 characters to search...</h1>
      )}
    </article>
  );
}

export default SearchPage;
