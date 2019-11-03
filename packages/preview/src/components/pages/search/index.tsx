import { ALL_ICONS } from "@utils/icon";
import { Context } from "@utils/search-context";
import React from "react";

import SearchIconSet from "./search-iconset";

export default function SearchPageComponent() {
  const allIcons = ALL_ICONS;

  const { query } = React.useContext(Context);

  return query.length > 2 ? (
    <>
      <h2>
        Results for: <i>{query}</i>
      </h2>
      <div className="icons">
        {allIcons.map(icon => (
          <SearchIconSet key={icon.id} icon={icon} query={query} />
        ))}
      </div>
    </>
  ) : (
    <h2>Please enter at least 3 characters to search...</h2>
  );
}
