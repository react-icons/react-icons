import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({
  icon: Icon,
  iconSet,
  name,
  highlightPattern = null,
}: {
  icon: React.ComponentType;
  iconSet?: string;
  name: string;
  highlightPattern?: RegExp | null;
}) {
  const copyToClipboard = () => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center",
    });
  };

  const highlightedName = () => {
    if (highlightPattern)
      return name
        .split(highlightPattern)
        .map((part) => (part.match(highlightPattern) ? <b>{part}</b> : part));
    return name;
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">
        <Icon />
      </div>
      <div className="name">
        {iconSet && `${iconSet} `}
        {highlightedName()}
      </div>
    </div>
  );
}

export default Icon;
