import React from "react";

interface ContextType {
  query: string;
  setQuery: (query: string) => void;
  results: any;
  setResults: (results: any) => void;
}

export const Context: React.Context<ContextType> = React.createContext({
  query: "",
  setQuery: () => {
    // nop
  },
  results: {},
  setResults: () => {
    //nop
  }
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
