import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import classImg1 from "../../../assets/classes/class-img-1.jpg";
import classImg2 from "../../../assets/classes/class-img-2.jpg";
import classImg3 from "../../../assets/classes/class-img-3.jpg";
import classImg4 from "../../../assets/classes/class-img-4.jpg";
import classImg5 from "../../../assets/classes/class-img-5.jpg";
import { cn } from "@/lib/utils";
import Image from "next/image";

const classesData = [
  {
    dateTime: "Sunday: 8pm - 11pm",
    name: "Fitness Ball",
    image: classImg1,
  },
  {
    dateTime: "Monday: 8pm - 11pm",
    name: "Bench Press",
    image: classImg2,
  },
  {
    dateTime: "Tuesday: 8pm - 11pm",
    name: "Handstand Negatives",
    image: classImg3,
  },
  {
    dateTime: "Wednesday: 8pm - 11pm",
    name: "Weight Lifting",
    image: classImg4,
  },
  {
    dateTime: "Thursday: 8pm - 11pm",
    name: "Cross Training",
    image: classImg5,
  },
];

const WorkoutClasses = () => {
  return (
    <div className="pt-16 lg:pt-28 bg-black ">
      {/* <Container> */}
      <SectionHeader
        boldText="Workout Classes"
        simpleText="Build your body strong"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        {classesData.slice(0, 5).map((workoutClass, index) => (
          <div
            key={workoutClass.name}
            className={cn(
              {
                "lg:col-span-6": index < 2,
                "lg:col-span-4": index > 1,
              },
              "relative group overflow-hidden"
              // "overflow-hidden"
            )}
          >
            <Image
              className="hover:scale-125 hover:rotate-6 duration-300 transition-all"
              width={300}
              style={{ width: "100%" }}
              alt=""
              src={workoutClass.image}
            />
            <div className="space-y-3 absolute bottom-0 right-0 translate-x-[100%] group-hover:translate-x-0 translate-y-0 transition-all bg-black p-6 z-40">
              <span className="text-2xl uppercase text-primary">
                {workoutClass.dateTime}
              </span>
              <h2 className="text-3xl lg:text-4xl uppercase">
                {workoutClass.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {/* </Container> */}
    </div>
  );
};

export default WorkoutClasses;
