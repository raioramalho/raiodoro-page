import { useTheme } from './ui-theme/provider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import whiteImage from "../assets/white.png";
import darkImage from "../assets/dark.png";

export function BannerSlider() {
    const { theme } = useTheme();

  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='flex flex-row justify-center'>{theme === "light" ? <img src={whiteImage} /> : <img src={darkImage} />}</CarouselItem>
          <CarouselItem className='flex flex-row justify-center'>{theme === "light" ? <img src={darkImage} /> : <img src={whiteImage} />}</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
