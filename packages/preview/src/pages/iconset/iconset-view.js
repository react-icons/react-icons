import React from "react";

import Icon from "../../components/icon";

function IconsetView({ icons, id }) {
  return (
    <div className="icons">
      {Object.keys(icons)
        .filter(name => name.toLocaleLowerCase().startsWith(id))
        .map(name => (
          <Icon icon={icons[name]} name={name} />
        ))}
    </div>
  );
}

export default IconsetView;
