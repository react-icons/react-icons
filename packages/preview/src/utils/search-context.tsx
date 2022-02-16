import React, { useEffect } from "react";
interface SearchContext {
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  query: string,
  results: any,
  setResults: React.Dispatch<React.SetStateAction<any>>
}
export const Context = React.createContext<SearchContext>({
  query: "",
  setQuery: () => { },
  results: {},
  setResults: () => { }
});

export const Provider = ({ children }) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState({});

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        results,
        setResults
      }}
    >
      {children}
    </Context.Provider>
  );
};
