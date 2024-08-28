import Counter from "@/components/pages/homePage/Counter";
import ExpertCoaches from "@/components/pages/homePage/ExpertCoaches";
import FitnessStudio from "@/components/pages/homePage/FitnessStudio";
import Hero from "@/components/pages/homePage/Hero";
import Services from "@/components/pages/homePage/Services";
import WorkoutClasses from "@/components/pages/homePage/WorkoutClasses";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FitnessStudio />
      <Counter />
      <WorkoutClasses />
      <ExpertCoaches />
    </div>
  );
};

export default HomePage;
