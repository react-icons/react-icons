import * as React from 'react';

export interface IconContext {
  color?: string;
  size?: string;
}

const DefaultContext: IconContext = {
  color: 'black',
  size: undefined,
};
export const IconContext: React.Context<IconContext> = React.createContext && React.createContext(DefaultContext)

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
        style={{ fill: conf.color, stroke: conf.color, ...props.style}}
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
