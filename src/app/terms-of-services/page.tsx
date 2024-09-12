import React from "react";
import { getTermsOfServices } from "../blog/utils";
import { MainNav } from "@/components/MainNav";
import CustomMDX from "@/components/MDX";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Services",
  description: "This page explains the terms of use of the site.",
};

const page = () => {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );
  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
};

export default page;
