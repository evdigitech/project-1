import React, { useEffect, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import Toggle from "../../../components/toggle";
import ProgramDetail from "./modalsection/programDetail";
import Questionnairesmodal from "./modalsection/questionnairesmodal";

const data = [
  {
    id: 1,
    heading: "Diversity, Equity & Inclusion",
    role: "both",
    mentor: "12",
    mentees: "54",
    matching: "Yes",
  },
  {
    id: 2,

    heading: "Carrer Development",
    role: "both",
    mentor: "12",
    mentees: "12",
    matching: "Yes",
  },
  {
    id: 3,

    heading: "Reverse Mentoring",
    role: "both",
    mentor: "04",
    mentees: "35",
    matching: "Yes",
  },
  {
    id: 4,

    heading: "Future Leaders",
    role: "both",
    mentor: "04",
    mentees: "35",
    matching: "Yes",
  },
];

function Carousel() {
  const [showModal1, setShowModal1] = useState(false);
  const [leaveProgram, setLeaveProgram] = useState(false);

  const [questionnaires, setQuestionnaires] = useState(false);
  const [flag, setFlag] = useState([]);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const filterState = data.filter((item) => item.id === num);
    setFlag(filterState);
  }, []);

  const addHandler = (value) => {
    if (data.length >= value && value > 0) {
      setNum(value);
      const filterState = data.filter((item) => item.id === value);
      setFlag(filterState);
    }
  };
const adddotHandler=(value)=>{
console.log("value", value)
}
  const questionnairesHandler = () => {
    setQuestionnaires(true);
  };

  const handleClose = () => {
    setShowModal1(true);
  };
  const leaveAccept = () => {
    setLeaveProgram(false);
  };
  const closeDetailModal = () => {
    setLeaveProgram(false);
    setShowModal1(false);
  };

  const closeQuestionnairesmodal = () => {
    setQuestionnaires(false);
  };

  return (
    <>
      <ProgramDetail
        closeDetailModal={closeDetailModal}
        leaveAccept={leaveAccept}
        showModal1={showModal1}
      />
      <Questionnairesmodal
        showModal={questionnaires}
        closeQuestionnairesmodal={closeQuestionnairesmodal}
      />

      <div className="drop-shadow-2xl relative ">
        {flag?.map((item, index) => {
          return (
            <>
              <div className="bg-white p-6 rounded-md" key={index}>
                <p className="font-black">{item.heading}</p>
                <div className="flex  gap-6 ">
                  <button
                    onClick={() => addHandler(num - 1)}
                    className="absolute bg-[#dddddd] rounded-full top-[40%] -left-4 inline-block h-10 w-10"
                  >
                    <RiArrowLeftSLine className=" font-black text-3xl mx-auto  text-[#0F69AF] " />
                  </button>
                  <button
                    onClick={() => addHandler(num + 1)}
                    className="absolute bg-[#dddddd] rounded-full top-[40%] -right-4 inline-block h-10 w-10"
                  >
                    <RiArrowRightSLine className=" font-black text-3xl mx-auto  text-[#0F69AF] " />
                  </button>
                  <div className="grid  grid-cols-2 sm:gap-16  ">
                    <div className="grid sm:grid-rows-3 grid-rows-2 sm:col-span-1 col-span-2 sm:mb-0 mb-2 gap-2">
                      <div className="row-span-1 ">
                        <p className="text-xs text-[#7D7D89]"> Role</p>
                        <p className="text-base">{item.role}</p>
                      </div>
                      <div className="row-span-1">
                        <p className="text-xs text-[#7D7D89]">
                          Mentor’s enrolled
                        </p>
                        <p className="text-base">{item.mentor}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-rows-3 grid-rows-2 col-span-1 gap-2">
                      <div className=" flex justify-between mb-2">
                        <div>
                          <p className="text-xs text-[#7D7D89]">
                            Available for matching
                          </p>
                          <p className="text-base">{item.matching}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-[#7D7D89]">
                          Mentees enrolled
                        </p>
                        <p className="text-base">{item.mentees}</p>
                      </div>
                    </div>
                  </div>
                  <Toggle />
                </div>

                <div>
                  <div className=" flex sm:justify-end justify-center rounded-md">
                    <div className=" gap-4 flex sm:flex-row flex-col">
                      <button
                        className="  bg-[#E9E9ED] text-[#0F69AF] font-black px-4 py-2 text-base text-center rounded-md "
                        type="button"
                        onClick={questionnairesHandler}
                      >
                        Questionnaires
                      </button>
                      <button
                        type="button"
                        className="   bg-[#E9E9ED] text-[#0F69AF]  px-4 py-2  font-black text-base text-center rounded-md"
                        onClick={handleClose}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="flex justify-center  mt-3  gap-3">
        {data.map((item, index) => (
          
            <button key={index}
              onClick={() => addHandler(index+1)}
              className={index+1 === num ? "bg-[#0F69AF] h-2 w-2 rounded-full" : "bg-white h-2 w-2 rounded-full"}
            ></button>
            ))}
            </div>
      </div>
    </>
  );
}

export default Carousel;
