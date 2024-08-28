/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import React from "react";
import fitnessImg1 from "../../../assets/fitness-studio/fitness-studio1.jpg";
import fitnessImg2 from "../../../assets/fitness-studio/fitness-studio2.jpg";
import signature1 from "../../../assets/fitness-studio/signature-1.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { dm_sans } from "@/lib/fonts";

const FitnessStudio = () => {
  return (
    <div className="pt-24 lg:pt-28 bg-black">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex gap-4">
            <div className="w-full max-h-[550px] overflow-hidden">
              <Image
                style={{ height: "100%" }}
                className="hover:scale-105 duration-300 transition-all pb-8"
                alt=""
                src={fitnessImg1}
                width={300}
                height={450}
              />
            </div>
            <div className="w-full max-h-[550px] overflow-hidden">
              <Image
                style={{ height: "100%" }}
                className="hover:scale-105 duration-300 transition-all mt-8"
                alt=""
                src={fitnessImg2}
                width={300}
                height={450}
              />
            </div>
          </div>
          <div className="flex-1">
            <span className="text-[#999] text-lg uppercase font-medium">
              Welcome to Gym On Fitness Center
            </span>
            <h2 className="text-4xl lg:text-6xl uppercase font-medium mt-3 mb-5">
              Fitness Studio &amp; Gym For Ladies or Men's
            </h2>
            <div>
              <p
                className={cn(
                  dm_sans.className,
                  "mb-8 text-[#999] text-lg font-[400px]"
                )}
              >
                Regular trips to the gym are great, but don't worry if you can't
                find a large chunk of time to exercise every day. Our portfolio
                includes dozens of successfully completed projects of houses of
                different storeys, with high–quality finishes and good repairs.
                Building houses is our vocation!
              </p>
              <Image alt="" src={signature1} width={230} height={60} />
            </div>
            <h3 className="mt-6 font-medium text-4xl  text-[#999]">
              MD Al-Habib
            </h3>
            <h4 className={cn(dm_sans.className, "text-sm ")}>
              Director and CEO of Gym Center
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FitnessStudio;
