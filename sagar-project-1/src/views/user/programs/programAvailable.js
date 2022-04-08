import React from "react";



function ProgramAvailable(props) {
  const {programNameSelect, proName}=props;

  
  return (
    <>
      <div className="row-span-5   bg-[#F8F8FC] rounded-md ">
        <div className="text-bold p-[15px] text-[16px]">
          Programs Available{" "}
        </div>
        <div >
          {proName.length===0? <div className="text-[#1B1B25] p-3  text-[14px] ">
              {" "}
              No Programs Available
            </div> : 
       
       proName?.map((item, index) => {
                return (
                  
                  <p
                  className="text-[#0F69AF] p-[15px] text-[14px] w-full cursor-pointer  border-t-2 border-[#E9E9ED] "
                  key={index}
                  value={item.value}
                  onClick={(e)=>programNameSelect(item.value)}
                  >
                  {item.label}
                  
                  </p>
                  
                  );
                })
          
              }
           </div>
          </div>
          
      
    </>
  );
}

export default ProgramAvailable;
