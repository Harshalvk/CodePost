import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { POSTS } from "@/lib/constants";


const TopCategories = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => (
        <Button
          variant={"secondary"}
          key={post.title}
          className="hover:scale-105 hover:shadow-md transition-all"
          asChild
        >
          <Link href={`${post.href}`}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
};

export default TopCategories;
