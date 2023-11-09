import React from "react";
import { SearchIconSet } from "./search-iconset";
import { IconsManifest } from "react-icons/lib";
import { useHashParams } from "../../utils/usehashparams";

export function SearchPageComponent() {
  const [params] = useHashParams();
  const q = params.get("q");
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    setQuery(typeof q === "string" ? q.toLowerCase() : "");
  }, [q]);

  if (query?.length > 2) {
    const hightlightPattern = new RegExp(`(${query})`, "i");
    return (
      <>
        <h2>
          Results for: <i>{query}</i>
        </h2>
        <div className="icons">
          {IconsManifest.map((icon) => (
            <SearchIconSet
              key={icon.id}
              icon={icon}
              query={query}
              highlightPattern={hightlightPattern}
            />
          ))}
        </div>
        <h3 className="no-results" />
      </>
    );
  }
  return <h2>Please enter at least 3 characters to search...</h2>;
}
