//"polygon(20% 0%, 100% 0%, 80% 60%, 55% 60%, 65% 45%, 70% 15%, 30% 15%, 25% 40%, 40% 40%, 20% 100%, 20% 60%, 0% 60%)",
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import React from "react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import slideImg1 from "../../../assets/slide-image-1.png";
import slideImg2 from "../../../assets/slide-image-2.png";
import slideImg3 from "../../../assets/slide-image-3.png";

const carouselData = [
  {
    colorText: "high intensity",
    boldText: "workout",
    simpleText: "for weight loss",
    phone: "12345678999",
    image: slideImg2,
  },
  {
    colorText: "Wellnss & relaxing",
    boldText: "yoga",
    simpleText: "for flourishing and good health",
    phone: "12345678999",
    image: slideImg1,
  },
  {
    colorText: "high intensity",
    boldText: "workout",
    simpleText: "for weight loss",
    phone: "12345678999",
    image: slideImg3,
  },
];

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/YfVzJQ2/hero-banner.jpg)`,
      }}
    >
      <div className="bg-black bg-opacity-90 min-h-screen flex items-center">
        <Container>
          <Carousel
            opts={{
              watchFocus: true,
              align: "start",
              loop: true,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {carouselData.map((data, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 flex flex-col gap-10 lg:gap-6 lg:flex-row  lg:justify-between lg:items-center min-h-screen w-full">
                    <div className="flex-1 text-center lg:text-left ">
                      <h2 className="text-3xl lg:text-4xl uppercase text-primary mb-3">
                        {data.colorText}
                      </h2>
                      <h1 className="text-6xl md:text-8xl lg:text-9xl mb-3 uppercase">
                        {data.boldText}
                      </h1>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase pb-10">
                        {data.simpleText}
                      </h2>
                      <div className="flex justify-center lg:justify-normal items-center gap-5">
                        <h2 className="text-xl sm:text-2xl">{data.phone}</h2>
                        <Button>start consulting</Button>
                      </div>
                    </div>
                    <div className="flex-1 relative h-full">
                      <svg
                        className="absolute top-[10%] right-0 -z-[1px] h-auto"
                        viewBox="0 0 261 235"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M261 0L190.483 144.088H128.135L162.104 102.062L188.333 45.885H89.8666L70.0873 87.4818H117.815L0 235L49.0181 125.219H0L61.9176 0H261Z"
                          fill="transparent"
                          stroke="red"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="max-w-[500px]">
                        <Image
                          className="h-auto z-10 relative"
                          alt="Slide Image"
                          src={data.image}
                          style={{ width: "100%" }}
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="bg-red-400">h</CarouselPrevious>
            <CarouselNext /> */}
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
