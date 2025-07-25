import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bird from "@/public/images/birds.jpg";
import bird2 from "@/public/images/birds_2.jpg";
import bird3 from "@/public/images/bird_3.jpg";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const TestCarousel = () => {
  return (
    <React.Fragment>
      Test Carousel
      <AspectRatio
        ratio={3 / 1}
        className="bg-slate-800 flex justify-center items-center rounded-2xl"
      >
        <Carousel className=" w-full">
          <CarouselContent>
            <CarouselItem className=" mx-auto p-5">
              <div className="flex justify-center items-center  space-x-2">
                <Image
                  src={bird}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
                <Image
                  src={bird}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
                <Image
                  src={bird}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
            <CarouselItem className=" mx-auto p-5">
              <div className="flex justify-center items-center space-x-2">
                <Image
                  src={bird2}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
                <Image
                  src={bird2}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
                <Image
                  src={bird2}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
            <CarouselItem className=" mx-auto p-5">
              <div className="flex justify-center items-center space-x-2">
                <Image
                  src={bird3}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
                <Image
                  src={bird3}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
                <Image
                  src={bird3}
                  alt="test"
                  className="w-60 h-60 object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AspectRatio>
    </React.Fragment>
  );
};

export default TestCarousel;
