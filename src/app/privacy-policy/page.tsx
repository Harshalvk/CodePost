import React from "react";
import { getPrivacyPolicy } from "../blog/utils";
import { MainNav } from "@/components/MainNav";
import CustomMDX from "@/components/MDX";
import Container from "@/components/Container";

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
