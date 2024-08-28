import Container from "@/components/shared/Container";
import React from "react";

const expertCoachesData = [
  {
    name: "Gorden Qlark",
    designation: "CROSSFIT COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
  },
  {
    name: "Moniqa Linda",
    designation: "FITNESS COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
  },
  {
    name: "Robert Jessi",
    designation: "BODYBUILDING COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
  },
  {
    name: "Willimes Haniq",
    designation: "YOGA COACH",
    facebook: "#",
    x: "#",
    linkedin: "#",
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
      </Container>
    </div>
  );
};

export default ExpertCoaches;
