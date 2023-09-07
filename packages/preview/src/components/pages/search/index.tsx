import { ALL_ICONS } from "@utils/icon";
import React from "react";

import SearchIconSet from "./search-iconset";
import { useRouter } from "next/router";

export default function SearchPageComponent() {
  const allIcons = ALL_ICONS;
  const router = useRouter();
  const { q } = router.query as { q: string | string[] | undefined };
  const query = typeof q === "string" ? q.toLowerCase() : "";

  if (query?.length > 2) {
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
