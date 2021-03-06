import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
function CarouselSection() {
  return (
    <div className="">
      <Carousel
        autoPlay
        stopOnHover
        useKeyboardArrows
        dynamicHeight={false}
        showStatus={false}
        infiniteLoop
        showArrows={false}
        labels={false}
        showThumbs={false}
        swipeScrollTolerance={150}
        swipeable={true}
        verticalSwipe="standard"
        preventMovementUntilSwipeScrollTolerance
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </div>
  );
}

export default CarouselSection;
