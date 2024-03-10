import { Card } from "./components/ui/card";
import { Banner } from "./components/banner";
import { ReleasesCard } from "./components/releases-card";

export function App() {
  return (
    <main
      id="main"
      className="m-4 p-4 w-min-screen flex flex-col justify-center items-center gap-2"
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
        <Card>
          <div className="m-2 p-2 flex flex-col justify-center items-center">
            <strong>Release notes</strong>
          </div>
        </Card>
      </div>
    </main>
  );
}
