import React, { useEffect, useState } from "react";

import IconetInfo from "./iconset-info";
import IconsetView from "./iconset-view";
import IconsetPageLoading from "./loading";

function IconSetPage({ icon }) {
  const [icons, setIcons] = useState({});

  useEffect(() => {
    import(`react-icons/${icon.id}/index`).then(setIcons);
  }, [icon]);

  return Object.keys(icons).length ? (
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
  ) : (
    <IconsetPageLoading />
  );
}

export default IconSetPage;
