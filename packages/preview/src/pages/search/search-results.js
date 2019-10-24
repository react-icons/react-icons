import React, { useState, useEffect } from "react";

import Icon from "../../components/icon";

function SearchResults({ iconsId, query }) {
  const [icons, setIcons] = useState({});

  useEffect(() => {
    import(`react-icons/${iconsId}/index`).then(setIcons);
  }, [iconsId]);

  return (
    <>
      {Object.keys(icons)
        .filter(name =>
          name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        .map(name => (
          <Icon key={icons[name]} icon={icons[name]} name={name} />
        ))}
    </>
  );
}

export default SearchResults;
