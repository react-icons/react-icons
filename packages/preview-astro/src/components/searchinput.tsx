import React, { useEffect, useCallback, useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { debounce } from "../utils/debounce";
import { useHashParams } from "../utils/usehashparams";
export function SearchInput() {
  const [inputQuery, setInputQuery] = useState<string>("");
  const [params] = useHashParams();
  const q = params.get("q");

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const currentQuery = q || "";
    setInputQuery(currentQuery);

    // To handle focus on refresh
    currentQuery && searchInputRef.current?.focus();
  }, [q]);

  const debouncedOnSearch = useCallback(
    debounce((query: string) => {
      window.location.href = `/react-icons/search#q=${query}`;
    }, 500),
    [],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      spellCheck={false}
      value={inputQuery}
      onChange={onChange}
      ref={searchInputRef}
    />
  );
}
