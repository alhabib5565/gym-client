import {
  CalendarDays,
  ChevronsRight,
  Dumbbell,
  GraduationCap,
} from "lucide-react";
import React from "react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { dm_sans } from "@/lib/fonts";

const servicesData = [
  {
    title: "Gym Equipment",
    icon: Dumbbell,
    description:
      "Discover our wide range of state-of-the-art gym equipment designed to meet all your fitness needs. From cardio machines to strength training gear, we have everything you need to achieve your fitness goals.",
  },
  {
    title: "Expert Trainers",
    icon: GraduationCap,
    description:
      "Our certified trainers are here to guide you every step of the way. With personalized training plans and expert advice, you’ll receive the support and motivation needed to reach your full potential.",
  },
  {
    title: "Workout Schedule",
    icon: CalendarDays,
    description:
      "Stay on track with our structured workout schedules. Whether you’re aiming for a specific goal or just want to maintain your fitness, our organized programs ensure you get the most out of every session.",
  },
];

const Services = () => {
  return (
    <div className="pt-16 lg:pt-28 bg-black ">
      <Container>
        <SectionHeader
          boldText="Workout Classes"
          simpleText="Build your body strong"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="p-8 border border-[#e8e8e8] group relative overflow-hidden transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-150 z-[1px] transition-transform duration-300 ease-in-out"></div>
              <service.icon className="relative h-[90px] w-[90px] text-primary group-hover:text-white transition-colors duration-300 ease-in-out" />
              <h2 className="relative pt-5 pb-4 text-3xl text-left transition-transform duration-300 ease-in-out ">
                {service.title}
              </h2>

              <p
                className={cn(
                  dm_sans.className,
                  "relative text-lg text-justify pb-8 text-[#999] group-hover:text-white transition-colors duration-300 ease-in-out"
                )}
              >
                {service.description}
              </p>

              <span className="relative h-[50px] w-[50px] grid place-items-center bg-[#444444] text-white transition-transform duration-300 ease-in-out transform hover:bg-white hover:text-primary cursor-pointer">
                <ChevronsRight />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
