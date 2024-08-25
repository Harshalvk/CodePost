import { popularPosts } from "@/lib/placeholderData";
import React from "react";
import { Icons } from "../Icons";

const PopularPosts = () => {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li
          key={post.title}
          className="flex items-center gap-2 group cursor-pointer p-2"
        >
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default PopularPosts;
