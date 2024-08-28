import Container from "@/components/shared/Container";
import { dm_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const counterData = [
  {
    count: "10",
    boldText: "Years Experience",
    simpleText: "",
  },
  {
    count: "90",
    boldText: "Experts Trainers",
    simpleText: "",
  },
  {
    count: "90",
    boldText: "Workout Classes",
    simpleText: "",
  },
  {
    count: "1020",
    boldText: "Satisfied Clients",
    simpleText: "",
  },
];

const Counter = () => {
  return (
    <div className="pt-24 lg:pt-28 ">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counterData.map((count) => (
            <div
              className="btn hover:-translate-y-4 hover:shadow-lg hover:shadow-white p-6 border border-[#e8e8e8] group relative overflow-hidden transition-transform duration-300"
              key={count.boldText}
            >
              <div>
                <span className="text-8xl">{count.count}</span>
                <span className="text-primary text-8xl ">+</span>
              </div>
              <h3 className="text-3xl font-medium mb-4">{count.boldText}</h3>
              <p
                className={cn(
                  dm_sans.className,
                  "text-[#999] text-lg font-[400px]"
                )}
              >
                Lorem ipsum dolor sit amet, consectne auctor aliquet.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Counter;
