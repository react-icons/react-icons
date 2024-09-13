import React from "react";
import { SearchIconSet } from "./search-iconset";
import { IconsManifest } from "react-icons/lib";
import { IconDetailModal } from "../icondetailmodal";
import { useSearch } from "../../utils/usesearch";

export function SearchPageComponent() {
  const { query } = useSearch();

  const [selected, setSelected] = React.useState<
    [string, string, React.ComponentType] | null
  >(null);

  // Work around. hydration error occurs when changing nanostores value before first component mount.
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  React.useEffect(() => {
    setIsFirstRender(false);
  }, []);

  if (!isFirstRender && query?.length > 1) {
    const hightlightPattern = new RegExp(
      `(${query
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .split(" ")
        .filter((t) => !!t)
        .join("|")})`,
      "i",
    );
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
  return <h2>Please enter at least 2 characters to search...</h2>;
}
