import * as React from "react";

import { IconContext, DefaultContext } from "./iconContext";

export interface IconTree {
  tag: string;
  attr: { [key: string]: string };
  child: IconTree[];
}

export interface IconLicense {
  name: string;
  license: string;
  licenseUrl: string;
  projectUrl: string;
}

function Tree2Element(tree: IconTree[]): React.ReactElement[] {
  return (
    tree &&
    tree.map((node, i) =>
      React.createElement(
        node.tag,
        { key: i, ...node.attr },
        Tree2Element(node.child),
      ),
    )
  );
}

export function GenIcon(license: IconLicense, data: IconTree) {
  const license_attr = {"aria-details": `Icon by ${license.name} (${license.projectUrl}) under the ${license.license} license. url: ${license.licenseUrl}`};
  // eslint-disable-next-line react/display-name
  return (props: IconBaseProps) => (
    <IconBase attr={{ ...license_attr, ...data.attr }} {...props} >
      {Tree2Element(data.child)}
    </IconBase>
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type IconType = (props: IconBaseProps) => React.ReactNode;
export function IconBase(
  props: IconBaseProps & { attr?: Record<string, string> },
): JSX.Element {
  const elem = (conf: IconContext) => {
    const { attr, size, title, ...svgProps } = props;
    const computedSize = size || conf.size || "1em";
    let className;
    if (conf.className) className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;

    return (
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
  };

  return IconContext !== undefined ? (
    <IconContext.Consumer>
      {(conf: IconContext) => elem(conf)}
    </IconContext.Consumer>
  ) : (
    elem(DefaultContext)
  );
}
