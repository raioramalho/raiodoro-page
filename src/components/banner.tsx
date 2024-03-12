import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { BannerSlider } from "./banner-slider";

export function Banner() {

  return (
    <Card>
      <CardHeader>
      <div className="p-2 w-auto h-auto flex flex-col justify-center items-center">
        <strong className="text-6xl">RAIO⚡️DORO</strong>
        <p>The pomodoro App.</p>
      </div>
      <Separator className="w-auto border"/>
      </CardHeader>
      <CardContent className="flex flex-row justify-center">
        <BannerSlider/>
      </CardContent>
    </Card>
  );
}
