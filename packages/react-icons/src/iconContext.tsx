import * as React from 'react';
import {createContext} from 'react';

export interface IconContext {
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
}

export const DefaultContext: IconContext = {
  color: undefined,
  size: '1em',
  className: undefined,
  style: undefined,
  attr: undefined,
};

export const IconContext = createContext<IconContext>(DefaultContext);
