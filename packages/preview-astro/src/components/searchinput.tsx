import React from "react";
import { debounce } from "../utils/debounce";
import { useSearch } from "../utils/usesearch";

export function SearchInput() {
  const search = useSearch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const debouncedOnSearch = React.useCallback(
    debounce((query: string) => {
      search.setQuery(query);
    }, 500),
    [],
  );
  React.useEffect(() => {
    setInputQuery(search.query);

    const handleKeyDown = (e: KeyboardEvent) => {
      const isInputFocused = document.activeElement?.tagName === "INPUT"
      const isSlashPressed = e.key === "/" && !isInputFocused;

      if (isSlashPressed) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [inputQuery, setInputQuery] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputQuery(query);
    debouncedOnSearch(query);
  };
  return (
    <input
      ref={inputRef}
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
