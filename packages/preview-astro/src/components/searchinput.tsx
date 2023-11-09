import React from "react";
import { debounce } from "../utils/debounce";
import { useHashParams } from "../utils/usehashparams";

export function SearchInput() {
  const [params] = useHashParams();
  const q = params.get("q");
  React.useEffect(() => {
    setInputQuery(typeof q === "string" ? q : "");
  }, [q]);

  const debouncedOnSearch = React.useCallback(
    debounce((query: string) => {
      window.location.href = `/search#q=${query}`;
    }, 500),
    [],
  );

  const [inputQuery, setInputQuery] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputQuery(query);
    debouncedOnSearch(query);
  };
  return (
    <input
      type="text"
      aria-label="search"
      className="px2 py1"
      placeholder="🔍 Search Icons"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      value={inputQuery}
      onChange={onChange}
    />
  );
}
