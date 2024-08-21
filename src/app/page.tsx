import Container from "@/components/Container";
import LatestPost from "@/components/home/LatestPost";
import { MainNav } from "@/components/MainNav";

export default function Home() {
  return (
    <>
      <Container>
        <MainNav />
        <main>
          <div>
            <LatestPost />
          </div>
        </main>
      </Container>
    </>
  );
}
