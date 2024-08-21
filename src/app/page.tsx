import LatestPost from "@/components/home/LatestPost";
import { MainNav } from "@/components/MainNav";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPost />
        </div>
      </main>
    </>
  );
}
