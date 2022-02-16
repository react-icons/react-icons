import Icon, { IconProps } from "@components/@core/icon";
import loadable from "@loadable/component";
import React from "react";
import { getIcons } from "@utils/getIcons";
import SearchPageIconLoading from "./loading";
interface SearchIconSetProps extends Partial<IconProps> {
  onIconClick?: (iconName: string, importName: string, icon: any) => void,
  query: string,
  state: any
}
const fil = (a: unknown[], fn: (a: unknown) => boolean) => {
  const f = []; //final
  for (let i = 0; i < a.length; i++) {
    if (fn(a[i])) {
      f.push(a[i]);
    }
  }
  return f;
};


const Icons = ({ found, state, onClick, icons, highlightPattern }: { icons: any, found: string[], state: any } & Partial<SearchIconSetProps>) => {
  return <>{found.map((name, i) => (
    <Icon
      state={state}
      onClick={onClick}
      key={i + name}
      icon={icons[name]}
      name={name}
      highlightPattern={highlightPattern}
    />
  ))}
  </>
}

const MemoizedIcons = React.memo(Icons)
function SearchIconSet({ state, icon, query, highlightPattern, onIconClick }: SearchIconSetProps) {
  const IconSet = React.memo(loadable.lib(() => getIcons(icon.id)));
  return (
    <IconSet fallback={<SearchPageIconLoading />}>
      {({ default: icons }) => {
        const found = fil(Object.keys(icons), (name: string) =>
          name.toLowerCase().includes(query)
        )

        return (
          <MemoizedIcons icons={icons} highlightPattern={highlightPattern} onClick={onIconClick} state={state} found={found || []} />
        );
      }}
    </IconSet>
  );
}
export default (SearchIconSet)