import Counter from "@/components/pages/homePage/Counter";
import FitnessStudio from "@/components/pages/homePage/FitnessStudio";
import Hero from "@/components/pages/homePage/Hero";
import Services from "@/components/pages/homePage/Services";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FitnessStudio />
      <Counter />
    </div>
  );
};

export default HomePage;
