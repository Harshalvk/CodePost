"use client";
import React from "react";
import { Icons } from "../Icons";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import Link from "next/link";
import { PopularPostsSkeleton } from "../skeleton/PopularPostsSkeleton";

const PopularPosts = () => {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <PopularPostsSkeleton />;

  return (
    <ul className="overflow-auto">
      {data?.map((post: { category: string; slug: string; title: string }) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li
            key={post.title}
            className="flex items-center gap-2 group cursor-pointer p-2"
          >
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default PopularPosts;
