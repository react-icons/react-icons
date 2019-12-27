import React from "react";

export const Context = React.createContext({
  query: "",
  setQuery: () => {}
} as any);

export const Provider = ({ children }) => {
  const [query, setQuery] = React.useState("");

  return (
    <Context.Provider
      value={{
        query,
        setQuery
      }}
    >
      {children}
    </Context.Provider>
  );
};
