import React from "react";
import { categories } from "@/lib/placeholderData";
import { Button } from "../ui/button";
import Link from "next/link";

const TopCategories = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {categories.map((category) => (
        <Button
          variant={"secondary"}
          key={category}
          className="hover:scale-105 hover:shadow-md transition-all"
          asChild
        >
          <Link href={`/blog/${category}`}>{category}</Link>
        </Button>
      ))}
    </div>
  );
};

export default TopCategories;
