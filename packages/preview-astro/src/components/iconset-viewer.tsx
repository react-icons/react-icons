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

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("icon")) {
      setSelected(params.get("icon"));
    }
  }, [props.iconSet]);

  const onIconSelect = (icon: string) => {
    setSelected(icon);
    const url = new URL(window.location.href);
    url.searchParams.set("icon", icon);
    window.history.replaceState(null, "", url.toString());
  };

  const onCloseModal = () => {
    setSelected(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("icon");
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <>
      <IconDetailModal
        iconSet={props.iconSet}
        iconName={selected}
        component={selected ? icons?.[selected] : undefined}
        onClose={onCloseModal}
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
                onSelect={onIconSelect}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
