import React from "react";
import { formatDate, getBlogPosts } from "../../utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import CustomMDX from "@/components/MDX";
import RecordView from "@/components/RecordView";

export const generateStaticParams = async () => {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = ({ params }: { params: { category: string; slug: string } }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <RecordView
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
};

export default page;
