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
  return (props: IconBaseProps) => (
    <IconBase attr={{...data.attr}} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export function IconBase(props:IconBaseProps & { attr: {} | undefined }): JSX.Element {
  const elem = (conf: IconContext) => {
    const computedSize = props.size || conf.size || "1em";
    let className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className + ' ' || '') + props.className;

    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...conf.attr}
        {...props.attr}
        {...props}
        className={className}
        style={{ color: props.color || conf.color, ...conf.style, ...props.style}}
        height={computedSize}
        width={computedSize}
      >
      {props.children}
    </svg>
    )
  };

  return IconContext !== undefined
    ? <IconContext.Consumer>{(conf: IconContext) => elem(conf)}</IconContext.Consumer>
    : elem(DefaultContext);
}
