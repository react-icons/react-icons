import React from "react";

import SearchPageIconLoading from "./loading";
import { getIcons } from "virtual:react-icons-get-icons";
import type { IconManifestType } from "react-icons";
import Icon from "../icon";

export interface SearchIconsProps {
  icon: IconManifestType;
  query: string;
  highlightPattern: RegExp;
  onSelect?(
    iconSet: string,
    icon: string,
    component: React.ComponentType,
  ): void;
}
export function SearchIconSet({
  icon,
  query,
  highlightPattern,
  onSelect,
}: SearchIconsProps) {
  const [icons, setIcons] = React.useState<{
    [name: string]: React.ComponentType;
  }>();
  React.useEffect(() => {
    getIcons(icon.id).then((icons) => setIcons(icons));
  }, []);

  const found =
    icons &&
    Object.keys(icons)
      .filter((name) => {
        const rules = query
          .toLowerCase()
          .split(" ")
          .filter((t) => !!t);
        return rules.length == 0
          ? false
          : rules.every((term) => name.toLowerCase().includes(term));
      })
      .slice(0, 100); // show top 100 icons

  return (
    <>
      {found ? (
        found.map((name) => {
          const Component = icons[name];
          if (!Component) return null;
          return (
            <Icon
              key={name}
              component={Component}
              iconSet={icon.id}
              iconName={name}
              highlightPattern={highlightPattern}
              onSelect={(name) => onSelect?.(icon.id, name, Component)}
            />
          );
        })
      ) : (
        <SearchPageIconLoading />
      )}
    </>
  );
}
