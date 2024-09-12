import React from "react";
import { getPrivacyPolicy } from "../blog/utils";
import { MainNav } from "@/components/MainNav";
import CustomMDX from "@/components/MDX";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "This page explains the privacy policy of the site.",
};

const page = () => {
  let post = getPrivacyPolicy().find(
    (post) => post.slug === "privacy-policy"
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
