import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { CarouselStyles } from "./styles";

const CarouselComponent = ({ children }) => {
  return (
    <CarouselStyles>
      <ScrollingCarousel>{children}</ScrollingCarousel>
    </CarouselStyles>
  );
};

export default CarouselComponent;
