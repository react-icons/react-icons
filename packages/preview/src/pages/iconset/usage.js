import React from "react";

function Usage({ iconId }) {
  return (
    <div className="example-code">
      <code>
        <pre>{`import { ICON_NAME } from "react-icons/${iconId}";`}</pre>
      </code>
    </div>
  );
}

export default Usage;
