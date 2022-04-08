import React from "react";

import experience from "../../../assets/img/experience.svg";
import education from "../../../assets/img/education.svg";
import language from "../../../assets/img/language.svg";

function TitleProfile(props) {
  const { progressInfo, progressWork, progressSkill, progressEducation } =
    props;
  return (
    <div className="  grid row-span-3 xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12 md:mr-[12px] mr-1 lg:inline-grid md:inline-flex   bg-[#E9E9ED] xl:mr-[25px] sm ml-1  lg:mr-[5px] lg:h-[288px] md:h-[104px]   w-auto  gap-3 p-6 md:rounded-md mt-8">
      <div className="inline-flex gap-4 ">
        <div className="rounded-full bg-[#F8F8FC] text-[24px] h-10 w-10 px-[9px] py-2 textblue ">
          {/* <img
        src={personalInfo}
        alt=""
        className=" max-w-none w-6 h-auto	 "
      /> */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="#0F69AF"
            viewBox="0 0 32 32"
          >
            <title>personal-information</title>
            <path d="M16.192 1.536c-3.393 0-6.144 2.751-6.144 6.144s2.751 6.144 6.144 6.144c3.393 0 6.144-2.751 6.144-6.144v0c0-3.393-2.751-6.144-6.144-6.144v0zM8.512 7.68c0-4.242 3.438-7.68 7.68-7.68s7.68 3.438 7.68 7.68c0 4.242-3.438 7.68-7.68 7.68v0c-4.242 0-7.68-3.438-7.68-7.68v0z"></path>
            <path d="M28.915 22.99c-3.684-1.996-8.065-3.169-12.72-3.169s-9.036 1.173-12.864 3.24l0.144-0.071c-0.199 0.107-0.333 0.314-0.333 0.553 0 0 0 0.001 0 0.001v-0 5.64c0 0.424 0.344 0.768 0.768 0.768v0h24.57c0.424 0 0.768-0.344 0.768-0.768v0-5.64c0-0 0-0 0-0.001 0-0.238-0.133-0.446-0.329-0.551l-0.003-0.002zM2.752 21.635c3.894-2.11 8.524-3.351 13.445-3.351s9.551 1.24 13.597 3.426l-0.152-0.075c0.688 0.371 1.147 1.086 1.147 1.909 0 0 0 0 0 0v0 5.64c0 1.272-1.032 2.304-2.304 2.304v0h-24.581c-1.272 0-2.304-1.032-2.304-2.304v0-5.64c0.001-0.823 0.462-1.539 1.14-1.903l0.012-0.006z"></path>
          </svg>
        </div>
        <div>
          <p className="textblue font-bold ">Persoanl Information</p>
          <p className="text-xs text-[#7D7D89]">{progressInfo}% Complete</p>
        </div>
      </div>
      <div className="inline-flex  gap-x-4">
        <div className="rounded-full bg-[#F8F8FC] h-10 w-10 px-[9px] py-2 textblue  ">
          <img src={experience} alt="" className="max-w-none w-6 h-auto  " />
        </div>
        <div>
          <p className="textblue font-bold">Experience</p>
          <p className="text-xs text-[#7D7D89]">{progressWork}% Complete</p>
        </div>
      </div>
      <div className="inline-flex  gap-4">
        <div className="rounded-full bg-[#F8F8FC] h-10 w-10 px-[9px] py-2 textblue  ">
          <img src={language} alt="" className=" max-w-none w-6 h-auto	 " />
        </div>
        <div>
          <p className="textblue font-bold ">Skills</p>
          <p className="text-xs text-[#7D7D89]">{progressSkill}% Complete</p>
        </div>
      </div>
      <div className="inline-flex gap-4">
        <div className="rounded-full bg-[#F8F8FC] h-10 w-10 px-[9px] py-2 textblue ">
          <img src={education} alt="" className=" max-w-none w-6 h-auto	 " />
        </div>
        <div>
          <p className="textblue font-bold">Education</p>
          <p className="text-xs text-[#7D7D89]">
            {progressEducation}% Complete
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleProfile;
