import CodeBlock from "@components/@core/code-block";

export default function IconSetImport({ iconId }) {
  const importCode = `import { IconName } from "react-icons/${iconId}";`;

  return (
    <>
      <h2>Import</h2>
      <CodeBlock language="jsx" code={importCode} />
    </>
  );
}
