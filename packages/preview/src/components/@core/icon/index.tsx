import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name, highlightPattern = null }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);
  const copyToClipboard = () => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center"
    });
  };
  const copyImportToClipboard = () => {
    copy(`import { ${name} } from "react-icons/${name.substr(0, 2).toLowerCase()}";`);
    toast.success(`Copied import path o to clipboard`, {
      position: "bottom-center"
    });
  };

  const copySvgToClipboard = () => {
    if (ref.current) {
      copy(ref.current.innerHTML);
      toast.success(`Copied SVG to clipboard`, {
        position: "bottom-center"
      });
    }
  }

  const highlightedName = () => {
    if (highlightPattern)
      return name
        .split(highlightPattern)
        .map((part) => (part.match(highlightPattern) ? <b>{part}</b> : part));
    return name;
  };

  return (
    <div className="item" tabIndex={0} key={name} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <div className="icon h2" ref={ref}>{typeof icon === "function" && icon()}</div>
      <div className="name">{highlightedName()}</div>
      
      
      {visible && (
       <div className="tooltip">
          <button onClick={copySvgToClipboard}>Copy SVG</button>
          <button onClick={copyToClipboard}>Copy Name</button>
          <button onClick={copyImportToClipboard}>Copy Import</button>
        </div>
      )}
    </div>
  );
}

export default Icon;
