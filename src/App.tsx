import { Banner } from "./components/banner";
import { ReleasesCard } from "./components/releases-card";
import { ReleaseNotes } from "./components/releases-notes";

export function App() {
  return (
    <main
      id="main"
      className="p-4 w-min-screen h-auto flex flex-col justify-center items-center gap-2"
    >
      <div
        id="first-section"
        className="gap-2 flex flex-row flex-wrap justify-center items-top"
      >
        <Banner />
        <ReleasesCard />
      </div>

      <div
        id="second-section"
        className="gap-2 flex flex-row flex-wrap justify-center items-top"
      >
        <ReleaseNotes/>
      </div>
    </main>
  );
}
