import Container from "@/components/Container";
import { MainNav } from "@/components/MainNav";
import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-900">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
};

export default BlogLayout;
