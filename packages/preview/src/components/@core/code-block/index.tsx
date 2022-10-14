import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import PrismTheme from "prism-react-renderer/themes/nightOwl";
import React from "react";
import { IoMdClipboard } from "react-icons/io";

export default function CodeBlock({ code, language }) {
  const copyToClipboard = () => {
    copy(code);
    toast.success(`Copied to clipboard`, {
      position: "bottom-center"
    });
  };

  return (
    <Highlight
      {...defaultProps}
      theme={PrismTheme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} code`} style={style}>
          <a onClick={copyToClipboard} className="prism-code--copy">
            <IoMdClipboard />
          </a>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
