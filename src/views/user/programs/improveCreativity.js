import React, { useState } from "react";
import EnrollModal from "./enrollModal";
import LeaveModal from "./leaveModal";

function ImproveCreativity({leaveProgram, submitEnrollData,setLeaveProgram, leaveAccept, addProgramName, proName}) {

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const[radioBoth, setRadioBoth] = useState(false)

const bothHandler = () => {
  setRadioBoth(!radioBoth)
}

  const closeEnrollModal = () => {
    setShowModal(false);
  };

  const closeLeaveModal = () => {
    setLeaveProgram(false)
    setShowModal1(false);
  };
  const enrollModalHandler = () => {
    
   if(radioBoth===true)

      setShowModal(true);
   
  };


  return (
    <>
      <div className="col-span-6 lg:ml-10 mx-4">
        <label className="text-[#7D7D89] ">Program Name</label>
        {
        // proName.length===0  ? "" :
        addProgramName.length===0 ? "":
         <>
        <p className="text-[22px] mb-[34.07px]">
       {addProgramName}
          {/* {proName[0].label} */}
        </p>
       

        <div>
          <div className="flex ">
            <div>
              <p className="text-base text-[#7D7D89]">Mentor’s enrolled</p>
              <span className="text-[14px]">12</span>
            </div>

            <div className="ml-6 mb-[40px]">
              <p className="text-base text-[#7D7D89]  ">Mentee’s enrolled</p>
              <span className="text-[14px]">54</span>
            </div>
          </div>

          <div>
            <p className="text-base text-[#7D7D89]">Description</p>
            <div className="text-[14px] border-y-2 border-[#E9E9ED] py-[16.35px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
            <div className="text-[14px] py-[16.35px]">
              Neque diam risus tellus malesuada sed sagittis.{" "}
            </div>
            <div className="text-[14px] border-y-2 border-[#E9E9ED] py-[16.35px]">
              Enim, dolor tortor massa vestibulum libero vitae massa.{" "}
            </div>
            <div className="text-[14px] py-[16.35px]">
              Etiam purus consectetur ultrices in sagittis.{" "}
            </div>
          </div>
        </div>

        <div className="my-[40px]">
          <p className="mb-2 text-base text-[#7D7D89]">Your Role</p>
          <div role="group" className="flex ">
            <div className="my-auto">
              <label className=" text-black mr-6 text-base  ">
                <input
                  type="radio"
                  name="yourrole"
                  value=" Mentor"
                  className=" form-radio h-6 w-6 mr-1.5 focus:border-none border-4 border-[#DADADA] text-blue-600"
                  />
                Mentor
              </label>
            </div>
            <div>
              <label className=" text-black mr-6 text-base">
                <input
                  type="radio"
                  name="yourrole"
                  value=" Mentee"
                  className="  form-radio h-6 w-6  mr-1.5 focus:border-none border-4 border-[#DADADA] text-blue-600"
                  />
                Mentee
              </label>
            </div>
            <div>
              <label className=" text-black text-base">
                <input
                  type="radio"
                  name="yourrole"
                  value=" Both"
                  className=" form-radio h-6 w-6 mr-1.5 focus:border-none border-4 border-[#DADADA] text-blue-600"
                  onClick={bothHandler}
                  />
                Both
              </label>
             

             
                <EnrollModal closeEnrollModal={closeEnrollModal} submitEnroll={submitEnrollData}  showModal={showModal} enrollModalHandler={enrollModalHandler}/>
              
              
            </div>
          </div>
        </div>
          </>   }

        <div className="mb-20 bg-[#F8F8FC] py-[15px] px-4 flex justify-end rounded-md">
          {leaveProgram === false ? (
            <button
              type="submit"
              onClick={enrollModalHandler}
              className="h-[50px] w-[150px] text-4 bg-[#0F69AF] text-white font-black text-center rounded-md"
            >
              Fill Application
            </button>
          ) : (
            <button
              type="button"
              className="h-[50px] w-[150px] text-4 bg-[#0F69AF] text-white font-black text-center rounded-md"
              onClick={() => setShowModal1(true)}
            >
              Leave Program
            </button>
          )}
        </div>
        {/* . . . .  . leave button modal  . . . . . . */}
        <div>
          <LeaveModal closeLeaveModal={closeLeaveModal} leaveAccept={leaveAccept} showModal1={showModal1} />
        </div>
      </div>
    </>
  );
}

export default ImproveCreativity;
