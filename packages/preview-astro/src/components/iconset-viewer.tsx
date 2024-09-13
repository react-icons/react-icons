import React from "react";
import { getIcons } from "virtual:react-icons-get-icons";
import Icon from "./icon";
import { IconDetailModal } from "./icondetailmodal";

export interface IconSetViewerProps {
  iconSet: string;
}

export function IconSetViewer(props: IconSetViewerProps) {
  const [icons, setIcons] = React.useState<{
    [name: string]: React.ComponentType;
  }>();
  React.useEffect(() => {
    getIcons(props.iconSet).then((icons) => {
      setIcons(icons);
    });
  }, []);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <>
      <IconDetailModal
        iconSet={props.iconSet}
        iconName={selected}
        component={selected ? icons?.[selected] : undefined}
        onClose={() => setSelected(null)}
      />
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
                onSelect={(icon) => setSelected(icon)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
