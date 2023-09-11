import Container from "@components/@core/container";
import { getIconById } from "@utils/icon";
import React, { useState } from "react";

import IconSetImport from "./iconset-import";
import IconSetInfo from "./iconset-info";
import IconSetViewer from "./iconset-viewer";

export default function IconsPageComponent({ iconId }) {
  const icon = getIconById(iconId);

  const [inputQuery, setInputQuery] = useState("");

  const updateInputQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuery(e.target.value);
  };

  return (
    <Container title={icon.name}>
      <IconSetInfo icon={icon} />
      <IconSetImport iconId={icon.id} />
      <div className="search">
        <input
          type="text"
          aria-label="search"
          className="px2 py1"
          placeholder={`🔎 Search ${icon.name}`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          onChange={updateInputQuery}
        />
      </div>
      <IconSetViewer icon={icon} search={inputQuery} />
    </Container>
  );
}
