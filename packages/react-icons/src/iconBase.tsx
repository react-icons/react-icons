import * as React from "react";

import { IconContext, DefaultContext } from "./iconContext";

export interface IconTree {
  tag: string;
  attr: { [key: string]: string };
  child: IconTree[];
}

function Tree2Element(tree: IconTree[]): React.ReactElement[] {
  return (
    tree &&
    tree.map((node, i) =>
      React.createElement(
        node.tag,
        { key: i, ...node.attr },
        Tree2Element(node.child)
      )
    )
  );
}
export function GenIcon(data: IconTree) {
  // eslint-disable-next-line react/display-name
  return (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attr }} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
  parent?: boolean;
  parentClassName?: string;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export function IconBase(
  props: IconBaseProps & { attr?: Record<string, string> }
): JSX.Element {
  const elem = (conf: IconContext) => {
    const { attr, size, title, parent, parentClassName, ...svgProps } = props;
    const computedSize = size || conf.size || "1em";
    let className;
    if (conf.className) className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;

    // if parent is null, explicitly skip parent component.
    // else, use the flag value from props or the context.
    const _parent = parent === null ? undefined : parent || conf.parent;
    // can pass '' to parentClassName to override context value.
    const _parentClassName = parentClassName ?? conf.parentClassName;

    const icon = (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...conf.attr}
        {...attr}
        {...svgProps}
        className={className}
        style={{
          color: props.color || conf.color,
          ...conf.style,
          ...props.style,
        }}
        height={computedSize}
        width={computedSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        {title && <title>{title}</title>}
        {props.children}
      </svg>
    );

    // wrap component if parent is set.
    if (_parent) return <span className={_parentClassName}>{icon}</span>;
    return icon;
  };

  return IconContext !== undefined ? (
    <IconContext.Consumer>
      {(conf: IconContext) => elem(conf)}
    </IconContext.Consumer>
  ) : (
    elem(DefaultContext)
  );
}
