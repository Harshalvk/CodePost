import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";

const Blockquote = (props: any) => {
  return (
    <blockquote
      className="bg-blue-200 dark:bg-blue-950 darK:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote"
      {...props}
    />
  );
};

const Code = ({ children, ...props }: any) => {
  let codeHTML = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const CustomLink = (props: any) => {
  let href = props.href;

  if (href.startswith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startswith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = (props: any) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") //Replace spaces with -
    .replace(/&/g, "-and-") //Replace & with and
    .replace(/\-\-\+/g, "-"); //Replace multiple - with single
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

  Heading.displayName = `Heading${level}`;
  return Heading;
};

const Table = ({ data }: any) => {
  let headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));

  let rows = data.rows.map((cell: any, cellIndex: any) => (
    <td key={cellIndex}>{cell}</td>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  blockquote: Blockquote,
  Table,
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
