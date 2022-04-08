import React from "react";
import Image from "../../../assets/img/HomepageCarousel.png";
import Toggle from "../../../components/toggle";
import Carousel from "./carousel";
function ProgramCarousel() {
  return (
    <>
      <div className="bg-[#F3F3F7] py-[57px] px-[51px]   lg:flex justify-between ">
        <div className="">
          <img src={Image} alt="home page image" />
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default ProgramCarousel;
