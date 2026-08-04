import React from "react";
import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import { FaRegClipboard } from "react-icons/fa6";

export default function CopyTextWithIcon(props: {
    text: string;
}) {
    const handleCopy = () => {
        copy(props.text);

        toast.success(`Copied '${props.text}' to clipboard`, {
            position: "bottom-center",
        });
    };

    return (
      <pre className="pre-clipboard">
        <FaRegClipboard 
            className="clipboard-icon" 
            onClick={handleCopy}
        />
  
        <code> 
            {props.text} 
        </code>
      </pre>
    );
};
