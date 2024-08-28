import Container from "@/components/shared/Container";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

import coach1 from "../../../assets/coaches/coach-1.png";
import coach2 from "../../../assets/coaches/coach-2.png";
import coach3 from "../../../assets/coaches/coach-3.png";
import coach4 from "../../../assets/coaches/coach-4.png";

const expertCoachesData = [
  {
    name: "Gorden Qlark",
    designation: "CROSSFIT COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
    image: coach1,
  },
  {
    name: "Moniqa Linda",
    designation: "FITNESS COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
    image: coach2,
  },
  {
    name: "Robert Jessi",
    designation: "BODYBUILDING COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
    image: coach3,
  },
  {
    name: "Willimes Haniq",
    designation: "YOGA COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
    image: coach4,
  },
];

const ExpertCoaches = () => {
  return (
    <div className="pt-16 lg:pt-28 bg-black ">
      <Container>
        <div>
          {" "}
          <span className="text-lg font-[600px] uppercase text-[#999]">
            Meet Experts Trainers
          </span>
          <h2 className="text-4xl lg:text-6xl uppercase font-medium pb-6">
            Expert Coaches
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <CarouselContent>
            {expertCoachesData.map((coach, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="group border-[1px] border-[#e8e8e8]">
                  <div className="p-6">
                    <h2 className="capitalize text-6xl mb-2">{coach.name}</h2>
                    <h2 className="uppercase text-2xl text-[#999]">
                      {coach.designation}
                    </h2>
                    <div className="flex gap-2 mt-4">
                      <Facebook className="cursor-pointer" />
                      <Linkedin className="cursor-pointer" />
                      <Twitter className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="h-[250px] w-[250px] z-0 bg-[#504f4f] transition-all duration-300 group-hover:bg-primary absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
                      style={{
                        clipPath:
                          "polygon(20% 0%, 100% 0%, 80% 60%, 55% 60%, 65% 45%, 70% 15%, 30% 15%, 25% 40%, 40% 40%, 20% 100%, 20% 60%, 0% 60%)",
                      }}
                    ></div>
                    <Image
                      style={{ width: "65%" }}
                      className="mx-auto relative"
                      alt=""
                      src={coach.image}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-14 right-11">
            <CarouselPrevious className=" hover:bg-primary h-10 w-10 border bg-transparent grid place-items-center" />
            <CarouselNext className=" hover:bg-primary h-10 w-10 border bg-transparent grid place-items-center" />
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default ExpertCoaches;
