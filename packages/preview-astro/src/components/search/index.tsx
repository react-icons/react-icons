import React from "react";
import { SearchIconSet } from "./search-iconset";
import { IconsManifest } from "react-icons/lib";
import { useHashParams } from "../../utils/usehashparams";
import { IconDetailModal } from "../icondetailmodal";

export function SearchPageComponent() {
  const [params] = useHashParams();
  const q = params.get("q");
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    setQuery(typeof q === "string" ? q.toLowerCase() : "");
  }, [q]);

  const [selected, setSelected] = React.useState<
    [string, string, React.ComponentType] | null
  >(null);

  if (query?.length > 2) {
    const hightlightPattern = new RegExp(`(${query})`, "i");
    return (
      <>
        <IconDetailModal
          iconSet={selected?.[0]}
          iconName={selected?.[1] ?? null}
          component={selected?.[2]}
          onClose={() => setSelected(null)}
        />
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
              onSelect={(iconSet, iconName, component) => {
                setSelected([iconSet, iconName, component]);
              }}
            />
          ))}
        </div>
        <h3 className="no-results" />
      </>
    );
  }
  return <h2>Please enter at least 3 characters to search...</h2>;
}
