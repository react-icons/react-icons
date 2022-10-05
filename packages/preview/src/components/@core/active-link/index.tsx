import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const ActiveLink = ({
  children,
  href,
  activeClassName = "active",
  ...props
}) => {
  const router = useRouter();

  const child = React.Children.only(children);

  let className = child.props.className || "";

  if (router.asPath === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

export default ActiveLink;
