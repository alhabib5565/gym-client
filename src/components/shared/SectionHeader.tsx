import React from "react";

import headingIcon from "../../assets/heading-icon.png";
import Image from "next/image";
const SectionHeader = ({
  boldText,
  simpleText,
}: {
  boldText: string;
  simpleText: string;
}) => {
  return (
    <div className="text-center mx-auto space-y-5">
      <Image
        className="mx-auto"
        alt="heading icon"
        width={50}
        height={50}
        src={headingIcon}
      />
      <span className="text-lg font-[600px] uppercase text-[#999]">
        {simpleText}
      </span>
      <h2 className="text-4xl lg:text-6xl uppercase font-medium pb-6">
        {boldText}
      </h2>
    </div>
  );
};

export default SectionHeader;
