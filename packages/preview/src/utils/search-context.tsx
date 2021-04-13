import React from "react";

export const Context = React.createContext({
  query: "",
  setQuery: () => {},
  results: {},
  setResults: () => {}
} as any);

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
