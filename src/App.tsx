import { Banner } from "./components/banner";
import { ReleasesCard } from "./components/releases-card";
import { ReleaseNotes } from "./components/releases-notes";

export function App() {
  return (
    <main
      id="main"
      className="p-4 w-full min-h-screen flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8"
    >
      <div
        id="first-section"
        className="w-full gap-4 flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start max-w-[1200px]"
      >
        <Banner />
        <ReleasesCard />
      </div>

      <div
        id="second-section"
        className="w-full gap-4 flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start max-w-[1200px]"
      >
        <ReleaseNotes/>
      </div>
    </main>
  );
}