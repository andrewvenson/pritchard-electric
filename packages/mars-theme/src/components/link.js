import React from "react";
import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const MarsLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  return <Link {...props}>{children}</Link>;
};

export default connect(MarsLink, { injectProps: false });
