import React from "react";
import toast from "cogo-toast";
import copy from "copy-to-clipboard";

export interface IconProps {
  component: React.ComponentType;
  iconName: string;
  iconSet?: string;
  highlightPattern?: RegExp | null;
  onSelect?(icon: string): void;
}
export default function Icon(props: IconProps) {
  if (!props) {
    return null;
  }
  const Component = props.component;
  if (!Component) {
    return null;
  }

  const copyToClipboard = () => {
    if (props.onSelect) {
      props.onSelect(props.iconName);
    } else {
      copy(props.iconName);
      toast.success(`Copied '${props.iconName}' to clipboard`, {
        position: "bottom-center",
      });
    }
  };

  const highlightedName = () => {
    const { highlightPattern } = props;
    if (highlightPattern) {
      return props.iconName
        .split(highlightPattern)
        .map((part, i) =>
          part.match(highlightPattern) ? <b key={i}>{part}</b> : part,
        );
    }
    return props.iconName;
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard}>
      <div className="icon h2">
        <Component />
      </div>
      <div className="name">
        {props.iconSet && `${props.iconSet} `}
        {highlightedName()}
      </div>
    </div>
  );
}
