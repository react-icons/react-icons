import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React, { useEffect } from "react";
export interface IconProps {
  onClick?: (iconName: string, importName: string, icon: any) => void,
  highlightPattern: RegExp | string,
  name: string
  icon: any,
  state: any
}
function Icon({ icon, name, highlightPattern = null, onClick, state }: IconProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const copyToClipboard = (e) => {
    if (ref.current) {

      ref.current.focus()

    }
    const importName = `import { ${name} } from "react-icons/${(
      name[0] + name[1]
    ).toLowerCase()}" `

    copy(
      importName
    );
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center",
    });
    if (onClick) {
      onClick(name, importName, icon)
    }
  };
  let highlight = state?.name === name ? 'highlight-icon' : ''
  const highlightedName = () => {
    if (highlightPattern)
      return name
        .split(highlightPattern)
        .map((part, i) => (part.match(highlightPattern) ? <b key={i}>{part}</b> : part));
    return name;
  };

  return (
    <div className={`item ${highlight} `} ref={ref} tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className={`icon h2 `}>{typeof icon === "function" && icon()}</div>
      <div className="name">{highlightedName()}</div>
    </div>
  );
}

export default React.memo(Icon);
