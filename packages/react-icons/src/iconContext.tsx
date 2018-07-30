import * as React from 'react';

export interface IconContext {
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const DefaultContext: IconContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
};

export const IconContext: React.Context<IconContext> = React.createContext && React.createContext(DefaultContext);
