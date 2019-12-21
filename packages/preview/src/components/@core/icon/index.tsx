import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name }) {
  const copyToClipboard = () => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center"
    });
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">{typeof icon === "function" && icon()}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Icon;
