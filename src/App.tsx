import { Suspense } from "react";
import { ReleasesCard } from "./components/releases-card";
import { Card } from "./components/ui/card";
import { Spinner } from "./components/ui/spinner";
import whiteImage from "./assets/white.png";
import darkImage from "./assets/dark.png";
import { useTheme } from "./components/ui-theme/provider";

export function App() {

  const { theme } = useTheme();

  return (
    <main
      id="main"
      className="m-4 p-4 w-min-screen flex flex-col justify-center items-center"
    >
      <div id="app" className="gap-2 flex flex-row flex-wrap">
        <Card>
          <div className="m-2 p-2 w-[500px] flex flex-col justify-center items-center">
            <strong className="text-6xl">RAIO⚡️DORO</strong>
            <p>The pomodoro App.</p>

            {
              theme === "light" ? <img src={whiteImage}/> : <img src={darkImage}/>
            }

          </div>

          
        </Card>

        <Card>
          <div className="m-2 p-2 w-[500px] flex flex-col justify-center items-center">
            <Suspense fallback={<Spinner w={"8"} h={"8"} />}>
              <ReleasesCard />
            </Suspense>
          </div>
        </Card>
      </div>
    </main>
  );
}
