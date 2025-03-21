import React from "react";
import CardThree from "../Components/CardThree";

interface sectionTwoProp {
  cat: string;
}

const SectionTwo: React.FC<sectionTwoProp> = ({ cat }) => {
  return (
    <div>
      <div className="news_head">
        <h1 className="fnt text-2xl text-light font-black">{cat}</h1>
        <div className="seperator md:w-full mt-2 opacity-50"></div>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-5 justify-center">
        <div className="md:col-span-4 col-span-12 ">
          <CardThree info={cat} />
        </div>
        <div className="md:col-span-4 col-span-12">
          <CardThree info={cat} />
        </div>
        <div className="md:col-span-4 col-span-12">
          <CardThree info={cat} />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
