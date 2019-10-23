import React from "react";
import * as icons from "react-icons/all";

import IconetInfo from "./iconset-info";
import IconsetView from "./iconset-view";

function IconSetPage({ icon }) {
  return (
    <article className="icons-article">
      <h1>{icon.name}</h1>
      <IconetInfo icon={icon} />

      <h2>Import</h2>
      <code>
        <pre>{`import { ICON_NAME } from "react-icons/${icon.id}";`}</pre>
      </code>

      <h2>Icons</h2>
      <IconsetView icons={icons} id={icon.id} />
    </article>
  );
}

export default IconSetPage;
