import React, { useState, useEffect } from "react";

import Icon from "../../components/icon";
import { getIcons } from "../../utils";

function SearchResults({ iconsId, query }) {
  const [icons, setIcons] = useState({});

  useEffect(() => {
    getIcons(iconsId).then(setIcons)
  }, [iconsId]);

  return (
    <>
      {Object.keys(icons)
        .filter(name =>
          name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        .map(name => (
          <Icon key={name} icon={icons[name]} name={name} />
        ))}
    </>
  );
}

export default SearchResults;
