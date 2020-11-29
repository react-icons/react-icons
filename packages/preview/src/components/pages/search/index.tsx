import { ALL_ICONS } from "@utils/icon";
import { Context } from "@utils/search-context";
import React from "react";

import SearchIconSet from "./search-iconset";

export default function SearchPageComponent() {
  const allIcons = ALL_ICONS;

  const { query, results, setResults } = React.useContext(Context);

  const getTotal = (results: object) => {
    return results ? 
      Object.values(results).reduce((p: number, c: number) => p + c, 0) :
      0
  }

  if (query.length > 2) {
    const hightlightPattern = new RegExp(`(${query})`, "i");
    return (
      <>
        <h2>
          Results for: <i>{query}</i>
        </h2>
        <div className="icons">
          {allIcons.map((icon) => (
            <SearchIconSet
              key={icon.id}
              icon={icon}
              query={query}
              setResults={setResults}
              highlightPattern={hightlightPattern}
            />
          ))}
        </div>
        {getTotal(results) === 0 && <h3>No icons found</h3>}
      </>
    );
  }
  return <h2>Please enter at least 3 characters to search...</h2>;
}
