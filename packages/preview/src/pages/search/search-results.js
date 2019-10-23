import React from "react";

import Icon from "../../components/icon";

function SearchResults({ icons, query }) {
  return (
    <div class="icons">
      {Object.keys(icons)
        .filter(name =>
          name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        .map(name => (
          <Icon icon={icons[name]} name={name} />
        ))}
    </div>
  );
}

export default SearchResults;
