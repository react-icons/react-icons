import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";
import { TbCloudDownload } from "react-icons/tb";

function Icon({ icon, name, highlightPattern = null }) {
  const copyToClipboard = () => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center",
    });
  };

  const downloadSvg = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();

    const iconElement = document.getElementById(name).firstChild as Element;

    const svgBlob = new Blob(
      ['<?xml version="1.0" standalone="no"?>\r\n', iconElement.outerHTML],
      { type: "image/svg+xml;charset=utf-8" }
    );

    const downloadLink = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(svgBlob),
      download: `${name}.svg`,
    });

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
      <div className="icon h2" id={name}>
        {typeof icon === "function" && icon()}
        <TbCloudDownload className="download" onClick={downloadSvg} />
      </div>
      <div className="name">{highlightedName()}</div>
    </div>
  );
}

export default Icon;
