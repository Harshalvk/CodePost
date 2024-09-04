import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") //Replace spaces with -
    .replace(/&/g, "-and-") //Replace & with and
    .replace(/\-\-\+/g, "-") //Replace multiple - with single
};

const createHeading = (level: number) => {
  const Heading = ({ children }: any) => {
    let slug = slugify(children);

    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
};

let components = {
  h1: createHeading(1),
};

const CustomMDX = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};

export default CustomMDX;
