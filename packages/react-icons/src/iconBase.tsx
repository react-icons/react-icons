import * as React from 'react';

import { IconContext, DefaultContext } from './iconContext';

export interface IconTree {
  tag: string;
  attr: {[key: string]: string};
  child: IconTree[];
}

function Tree2Element(tree: IconTree[]): React.ReactElement<{}>[] {
  return tree && tree.map((node, i) => React.createElement(node.tag, {key: i, ...node.attr}, Tree2Element(node.child)));
}
export function GenIcon(data: IconTree) {
  return React.forwardRef<JSX.Element, IconBaseProps>(
    (props: IconBaseProps, ref) => (
      <IconBase ref={ref} attr={{...data.attr}} {...props}>
        {Tree2Element(data.child)}
      </IconBase>
    )
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

interface IconBasePropsWithAttr extends IconBaseProps {
  attr?: {};
}

export type IconType = (props: IconBaseProps) => JSX.Element;

export const IconBase = React.forwardRef<any, IconBasePropsWithAttr>(
  (props: IconBasePropsWithAttr, ref): JSX.Element => {
    const elem = (conf: IconContext) => {
      const computedSize = props.size || conf.size || "1em";
      let className;
      if (conf.className) className = conf.className;
      if (props.className) className = (className ? className + ' ' : '') + props.className;
      const {attr, title, ...svgProps} = props;

      return (
        <svg
          ref={ref}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          {...conf.attr}
          {...attr}
          {...svgProps}
          className={className}
          style={{ color: props.color || conf.color, ...conf.style, ...props.style}}
          height={computedSize}
          width={computedSize}
          xmlns="http://www.w3.org/2000/svg"
        >
        {title && <title>{title}</title>}
        {props.children}
      </svg>
      )
    };

    return IconContext !== undefined
      ? <IconContext.Consumer>{(conf: IconContext) => elem(conf)}</IconContext.Consumer>
      : elem(DefaultContext);
  }
);
