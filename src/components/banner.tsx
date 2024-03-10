import { Card } from "./ui/card";
import { useTheme } from "./ui-theme/provider";
import whiteImage from "../assets/white.png";
import darkImage from "../assets/dark.png";

export function Banner() {
  const { theme } = useTheme();

  return (
    <Card>
      <div className="m-2 p-2 w-full flex flex-col justify-center items-center">
        <strong className="text-6xl">RAIO⚡️DORO</strong>
        <p>The pomodoro App.</p>

        {theme === "light" ? <img src={whiteImage} /> : <img src={darkImage} />}
      </div>
    </Card>
  );
}
