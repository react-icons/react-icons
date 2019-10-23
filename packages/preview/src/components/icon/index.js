import React from "react";

function Icon({ icon, name }) {
  return (
    <div className="item">
      <div className="icon" key={name}>
        <div className="body">{icon()}</div>
      </div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Icon;
