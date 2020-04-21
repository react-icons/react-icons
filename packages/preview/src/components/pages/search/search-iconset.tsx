import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import React from "react";
import { getIcons } from "@utils/getIcons";

import SearchPageIconLoading from "./loading";

export default function SearchIconSet({ icon, query, setResults }) {
  const IconSet = loadable.lib(() => getIcons(icon.id));

  return (
    <IconSet fallback={<SearchPageIconLoading />}>
      {({ default: icons }) => {
        const found = Object.keys(icons)
          .filter(name => name.toLowerCase().includes(query))
        return (
          <>
            {found.map(name => (
                <Icon key={name} icon={icons[name]} name={name} />
              ))}
              {setResults(prevResults => {
                return prevResults.hasOwnProperty(icon.id) ?
                  prevResults :
                  {
                    ...prevResults,
                    [icon.id]: found.length
                  }
              })}
          </>
        )
      }}
    </IconSet>
  );
}
