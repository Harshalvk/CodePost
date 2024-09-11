import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/MainNav";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

const page = async () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <Image
              src={"/Profile.jpg"}
              alt="Profile image"
              height={150}
              width={150}
              className="rounded-full self-center"
            />
            <p className="text-muted-foreground text-center break-words text-xl">
              Harshalvk
            </p>
          </div>
          <p className="text-muted-foreground text-lg py-4">
            I am a passionate Computer Science student excited about technology
            and innovation. I am eager to dive into full-stack web development and
            enjoy working with others to brainstorm and create new ideas.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
