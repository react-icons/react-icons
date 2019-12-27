import React from "react";

export default function Container({ children, title }) {
  return (
    <div className="p3">
      <h1 className="main">{title}</h1>
      {children}
    </div>
  );
}
