import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImproveCreativity from "./improveCreativity";
import ProgramEnroll from "./programEnroll";
import ProgramAvailable from "./programAvailable";
import "../../../assets/css/Program.css"

const programName = [
  {
    value: "10 steps to improve your creativity at workplace",
    label: "10 steps to improve your creativity at workplace",
  },
  {
    value: "Personal sessions and workshops",
    label: "Personal sessions and workshops",
  },
  {
    value: "Learn secrets to peak performance",
    label: "Learn secrets to peak performance",
  },
  {
    value: "How to ask powerful questions",
    label: "How to ask powerful questions",
  },
];
function Programs() {
  const [enrolled1, setEnrolled1] = useState(false);

  const [leaveProgram, setLeaveProgram] = useState(false);
  const [proName, setProName] = useState([]);
  const [addProgramName, setAddProgramName] = useState([]);
  const [addEnrollName, setAddEnrollName] = useState([]);
  const [deleteEnrollItem, setDeleteEnrollItem] = useState([]);
  const [deleteEnrollIndex, setDeleteEnrollIndex] = useState([]);

  useEffect(() => {
    setProName(programName);
  }, []);

  const notify = () =>
    toast.success("Program left successfully", {
      position: "top-center",
      autoClose: false, 
      hideProgressBar: true,
      theme: "colored",
      icon: "",
      width:'500px', top:'0', margin:'20px 0 0 -250px', left:'50%', fontweight:'bold', color:'#fff', height: '40px', lineheight: '40px',
    });

  const leaveAccept = () => {
    notify();
    setEnrolled1(false);
    setLeaveProgram(false);
   const newInput = [...addEnrollName];
    setProName([...proName, { label: deleteEnrollItem, value: deleteEnrollItem }]);
    newInput.splice(deleteEnrollIndex, 1);
    setAddEnrollName(newInput);
  };

  const submitDataEnroll = () => {
      setEnrolled1(true);
      setAddEnrollName([...addEnrollName, addProgramName]);
    const newInput = proName.filter((item) => item.value !== addProgramName);

    setProName(newInput);
    
  };
  const programNameSelect = (value) => {
    setAddProgramName(value)
    
  };

  const handleClose = (item, index) => {
    setLeaveProgram(true);
    setDeleteEnrollItem(item)
    setDeleteEnrollIndex(index)


    
  };
  
  return (
    <>
      {/* 
      <div className="grid grid-cols-12 gap-7"> */}

      <div className=" grid-rows-12 xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12 md:mr-0 mx-4  ">
        <ProgramAvailable  programNameSelect={programNameSelect} proName={proName} />
        <ProgramEnroll handleClose={handleClose}
         addProgramName={addEnrollName}
          />
      </div>
      <ImproveCreativity
      // proName={proName}
      setLeaveProgram={setLeaveProgram}
        leaveProgram={leaveProgram}
        addProgramName={addProgramName}
        submitEnrollData={submitDataEnroll}
        leaveAccept={leaveAccept}
      />

      <ToastContainer />

      {/* </div> */}
    </>
  );
}

export default Programs;
