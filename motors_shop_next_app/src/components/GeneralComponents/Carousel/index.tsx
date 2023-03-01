import { IPropsCarrousel } from "@/interfaces/generaInterfaces";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import { CarouselStyles } from "./styled";

const CarouselComponent = ({ children } : any) => {
  return (
    <CarouselStyles>
      <ScrollingCarousel>{children}</ScrollingCarousel>
    </CarouselStyles>
  );
};

export default CarouselComponent;