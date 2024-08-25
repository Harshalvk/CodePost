import Container from "@/components/Container";
import LatestPost from "@/components/home/LatestPost";
import { MainNav } from "@/components/MainNav";
import TopCategories from "@/components/home/TopCategories";
import PopularPosts from "@/components/home/PopularPosts";

export default function Home() {
  return (
    <>
      <Container>
        <MainNav />
        <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row lg:flex-row">
          <div>
            <LatestPost />
          </div>
          <div className="h-screen">
            <div>
              <h1 className="font-bold mb-4">Top Categories</h1>
              <TopCategories />
            </div>
            <div className="mt-10 sticky top-0">
              <h1 className="font-bold mb-4">Popular Posts</h1>
              <PopularPosts />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
