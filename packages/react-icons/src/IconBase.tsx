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
    <IconBase viewBox={data.attr['viewBox']} attr={data.attr} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  size: string | number;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export function IconBase(props:IconBaseProps & { attr: {} | undefined }): JSX.Element {
  const elem = (conf: IconContext) => {
    const computedSize = props.size || conf.size || "1em";
    return (
      <svg
        style={{ color: conf.color, ...props.style}}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...props.attr}
        viewBox={props.viewBox}
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
