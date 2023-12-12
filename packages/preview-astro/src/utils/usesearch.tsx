import React from "react";
import { useHashParams } from "./usehashparams";
import { searchWord } from "../store/store";
import { useStore } from "@nanostores/react";
import { navigate } from "astro:transitions/client";

interface UseSearchValue {
  query: string;
  setQuery(query: string): void;
}

export function useSearch(): UseSearchValue {
  const [params] = useHashParams();
  const query = useStore(searchWord);

  const q = params.get("q");
  React.useEffect(() => {
    const newQuery = typeof q === "string" ? q.toLowerCase() : "";
    searchWord.set(newQuery);
  }, [q]);

  const setQuery = React.useCallback((query: string) => {
    const history =
      globalThis.window?.location?.pathname === "/react-icons/search/"
        ? "replace"
        : "push";
    navigate(`/react-icons/search/#q=${query}`, { history });
    searchWord.set(query);
  }, []);

  return {
    query,
    setQuery,
  };
}
