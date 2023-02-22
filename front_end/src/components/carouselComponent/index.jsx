import { Carousel } from "@trendyol-js/react-carousel";

const CarouselComponent = ({ children }) => {
  return (
    <Carousel show={3.5} slide={3} swiping={true}>
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
