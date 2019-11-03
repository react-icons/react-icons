import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import React from "react";

import SearchPageIconLoading from "./loading";

export default function SearchIconSet({ icon, query }) {
  const IconSet = loadable.lib(() => import(`react-icons/${icon.id}/index.js`));

  return (
    <IconSet fallback={<SearchPageIconLoading />}>
      {({ default: icons }) => (
        <>
          {Object.keys(icons)
            .filter(name => name.toLowerCase().includes(query))
            .map(name => (
              <Icon key={name} icon={icons[name]} name={name} />
            ))}
        </>
      )}
    </IconSet>
  );
}
