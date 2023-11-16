import React from "react";
import { IconsManifest } from "react-icons";
import { getIcons } from "virtual:react-icons-get-icons";

const icons = [...IconsManifest].sort((a, b) => a.name.localeCompare(b.name));

const counts = await Promise.all(
  icons.map(async (icons) => {
    const components = await getIcons(icons.id);
    return Object.keys(components).length;
  }),
);

const samples = await Promise.all(
  icons.map(async (icons) => {
    const components = await getIcons(icons.id);
    const names = Object.keys(components);
    names.sort((a, b) => a.localeCompare(b));
    return names
      .slice(0, 15)
      .map((name) => components[name])
      .filter(Boolean) as React.ComponentType[];
  }),
);

export function IconList(): React.ReactElement {
  return (
    <div className="include-icon-sets">
      <div className="content">
        {icons.map((icons, index) => (
          <a
            key={icons.id}
            className="icon-set"
            href={`/react-icons/icons/${icons.id}/`}
          >
            <div className="name">{icons.name}</div>
            <div className="describe">
              <span className="counts">{counts[index]} icons</span>
            </div>
            <div className="samples">
              <div className="box">
                {samples[index]?.map((Component, i) => (
                  <Component key={i} {...{ size: "1em" }} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
