import * as React from 'react';

export interface IconContext {
  color?: string;
  size?: string;
}

export const DefaultContext: IconContext = {
  color: 'black',
  size: undefined,
};

export const IconContext: React.Context<IconContext> = React.createContext && React.createContext(DefaultContext);
