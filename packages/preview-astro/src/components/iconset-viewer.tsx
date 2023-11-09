import React from "react";
import { getIcons } from "virtual:react-icons-get-icons";
import Icon from "./icon";

export interface IconSetViewerProps {
  iconSet: string;
}

export function IconSetViewer(props: IconSetViewerProps) {
  const [icons, setIcons] = React.useState<{
    [name: string]: React.ComponentType<any>;
  }>();
  React.useEffect(() => {
    getIcons(props.iconSet).then((icons) => {
      setIcons(icons);
    });
  }, []);

  return (
    <>
      <h2>Icons</h2>
      {icons && (
        <div className="icons">
          {Object.keys(icons).map((name) => {
            const Component = icons[name];
            if (!Component) {
              return null;
            }
            return (
              <Icon
                key={name}
                iconSet={props.iconSet}
                iconName={name}
                component={Component}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
