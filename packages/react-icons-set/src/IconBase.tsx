import * as React from 'react';

export interface IconData {
  viewBox: string;
  path: {
    d: string;
  }[]
}

export function GenIcon(data: IconData) {
  return (props: IconBaseProps) => (
    <IconBase viewBox={data.viewBox} {...props}>
      {data.path.map((path, index) => <path key={index} {...path} />)}
    </IconBase>
  );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  size: string | number;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export function IconBase(props:IconBaseProps) {
  const computedSize = props.size || "1em";
  return (
    <svg
      style={props.style}
      viewBox={props.viewBox}
      height={computedSize}
      width={computedSize}
    >
      {props.children}
    </svg>
  );
}
