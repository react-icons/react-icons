import * as React from 'react';

import { IconContext, DefaultContext } from './iconContext';

export interface IconTree {
  tag: string;
  attr: {[key: string]: string};
  child: IconTree[];
  content: string;
}

function Tree2Element(tree: IconTree[]): React.ReactElement<{}>[] {
  return tree && tree.map((node, i) => React.createElement(node.tag, {key: i, ...node.attr}, node.content, Tree2Element(node.child)));
}

function HasStrokes(svg: any) : boolean {
  for (const prop in svg) {
    if (prop[0] === '_') {
      continue; // don't go into any "private" properties
    }
    if (prop === "stroke") {
      return true;
    } else if (typeof svg[prop] === "object") {
      const result = HasStrokes(svg[prop]);
      if (result) {
        return result;
      }
    } else if (prop === "content") {
      // check if this content is for the <style> tag
      if (svg["tag"] === "style") {
        // "content" may have styles for the stroke
        if (svg[prop].includes("stroke:")) {
          return true;
        }
      }
    }
  }

  return false;
}

export function GenIcon(data: IconTree) {
  return (props: IconBaseProps) => (
    <IconBase attr={{...data.attr}} {...props} hasStrokes={HasStrokes(data)}>
      {Tree2Element(data.child)}
    </IconBase>
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
  hasStrokes?: boolean;
}

export type IconType = (props: IconBaseProps) => JSX.Element;

export function IconBase(props:IconBaseProps & { attr: {} | undefined }): JSX.Element {
  const elem = (conf: IconContext) => {
    const computedSize = props.size || conf.size || "1em";
    let className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    const {attr, title, hasStrokes, ...svgProps} = props;

    // If the icon has explicit "stroke" attribute, do NOT set zero stroke width
    const stroke =  hasStrokes? null : { strokeWidth: 0 };

    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        {...stroke} 
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
