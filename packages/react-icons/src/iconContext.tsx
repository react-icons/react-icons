import * as React from "react";

export interface IconContext {
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
  parent?: JSX.Element;
  parentClassName?: string;
}

export const DefaultContext: IconContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined,
  parent: undefined,
  parentClassName: undefined,
};

export const IconContext: React.Context<IconContext> =
  React.createContext && React.createContext(DefaultContext);
