import  {React, useState } from "react";
import { BiEditAlt} from "react-icons/bi";
import goalicon from "../../../assets/img/goalsicon.svg";
import Agreement from "../../../assets/img/aggrementicon.png";
import Calander from "../../../assets/img/calanderHomeIcon.png";
import Message from "../../../assets/img/messageicon.png";
import Call from "../../../assets/img/callIcon.png";
import ModalSection from "./modalsection/mailModal/modalSection";

const data = [
  {
    avatar:
      "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    name: "Mac Paulson",
    position: "Software Engineer",
    positionAt: "Holland",
    agreement: "Complete",
    relationshipStarted: "Jan 02,2021",
    relationshipEnd: "Dec 31,2021",
  },
  {
    avatar:
      "https://i.imgur.com/w31qdrA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    name: "Julia Campbell",
    position: "UI Designer",
    positionAt: "Greece",
    agreement: "Complete",
    relationshipStarted: "Aug 18,2020",
    relationshipEnd: "July 31,2021",
  },
 
];



function MenteeCard({mailHandler, openAgreementModal, handlerCreateGoal}) {

  const cardHandler = (value) => {
    openAgreementModal(value)
    console.log("table", value)
    
  };

  
  
 

  return (
    <>
   
      {data?.map((item, index) => {
        return (
            <>
          <div className="grid grid-cols-12 gap-7 my-10 md:p-2 p-1" key={index}>
            <div className="lg:col-span-2 col-span-12 justify-self-center  ">
              <div>
                <div >
                  <img src={item.avatar} alt=""  className=" max-h-[140px] max-w-[140px]  rounded-full"/>
                </div>
                <div className="text-center mt-1.5">
                  <button className="text-[#0F69AF]">View Profile</button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-10 col-span-12 ">
              <div className="mb-10 text-center md:text-left  ">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-[#D6D6D6] text-xs">
                  {item.position}, {item.positionAt}
                </p>
              </div>
              <div className=" flex sm:flex-row flex-col gap-3 justify-between text-center mb-10 ">
                <div>
                  <h3 className="text-[#D6D6D6] text-xs">Agreement</h3>
                  <p>{item.agreement}</p>
                </div>
                <div>
                  <h3 className="text-[#D6D6D6] text-xs">
                    Relationship started
                  </h3>
                  <p>{item.relationshipStarted}</p>
                </div>
                <div>
                  <h3 className="text-[#D6D6D6] text-xs">Relationship end</h3>
                  <p>{item.relationshipEnd}</p>
                </div>
                <div className="my-auto">
                  <button className="font-black text-[#0F69AF]">End Relationship</button>
                </div>
              </div>
              <div className="sm:flex justify-between md:p-0 p-5 ">
                <div className="flex gap-4 text-xl text-[#0F69AF] md:justify-start justify-between md:mb-0  mb-5">
                  <div>
                    <button className="bg-[#E9E9ED] p-2.5  rounded-md" type="button" onClick={mailHandler} >
                      <BiEditAlt className="" />
                     
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-[#E9E9ED] p-2.5  rounded-md">
                      <img src={Calander} alt="" />
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#E9E9ED] p-2.5  rounded-md">
                      <img src={Call} alt="" />
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#E9E9ED] p-2.5  rounded-md">
                      <img src={Message} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <div>
                    <button onClick={handlerCreateGoal} type="button" className="bg-[#0F69AF]  text-white py-2.5 px-4 rounded-md inline-flex gap-2.5 font-bold">
                      <img src={goalicon} alt="" className="m-auto" />
                      Goals
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#0F69AF]  text-white py-2.5 px-4 rounded-md inline-flex gap-2.5 font-bold" onClick={()=>cardHandler(item)}>
                      <img src={Agreement} alt="" />
                      Agreement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
      </>
        );
      })}
    </>
  );
}

export default MenteeCard;
