import CodeBlock from "@components/@core/code-block";
import React from "react";

export default function IconSetImport({ iconId }) {
  const importCode = `import { IconName } from "react-icons/${iconId}";`;

  return (
    <>
      <h2>Import</h2>
      <CodeBlock code={importCode} />
    </>
  );
}
