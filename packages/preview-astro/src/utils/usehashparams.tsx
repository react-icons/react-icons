import React from "react";

export function useHashParams(): [
  URLSearchParams,
  (params: URLSearchParams) => void,
] {
  const [hash, setHash] = React.useState(
    new URLSearchParams(globalThis?.window?.location?.hash?.substring(1)),
  );
  React.useEffect(() => {
    const onHashChange = () => {
      setHash(
        new URLSearchParams(globalThis.window.location.hash.substring(1)),
      );
    };
    globalThis.window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => {
      globalThis.window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  const setter = React.useCallback((newHash: URLSearchParams) => {
    if (globalThis.window) {
      window.location.hash = newHash.toString();
    }
  }, []);
  return [hash, setter];
}
