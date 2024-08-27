import React from "react";
import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";

const page = ({ params }: { params: { category: string } }) => {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category 
  );

  if (!posts) {
    notFound();
  }

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishAt) > new Date(b.metadata.publishAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  key={post.slug}
                  title={post.metadata.title}
                  date={post.metadata.publishedAt}
                  summary={post.metadata.summary}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
};

export default page;
