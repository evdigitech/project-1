import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

function ProgramEnroll(props) {
  const {handleClose, addProgramName}=props;
  return (
    <>
    <div className="row-span-2 my-9 bg-[#F8F8FC] rounded-md">
          <div className="text-bold p-3 text-[16px] border-b-[1px] border-b-[#E9E9ED]">
            Programs Enrolled{" "}
          </div>

        {addProgramName.length===0 ?  <div className="text-[#1B1B25] p-3  text-[14px] ">
              {" "}
              No Programs Enrolled
            </div> :
            

          addProgramName?.map((item, key) => {
                    return (
                      <div type="reset" key={key} className=" mt-4  p-3 text-[14px] border-b-[1px] border-b-[#E9E9ED] w-full">
                        <span  className=" inline-flex  gap-[14px] cursor-pointer  "
                            onClick={(e) => handleClose(item, key)}
                        >
                          
                          <FaCheckCircle className=" text-[#149B5F] my-auto h-6 w-6 " />
                          
                            {item}
                          
                        </span>
                      </div>
                    );
                  })
        }
          
      
       
           
          
        </div>
    </>
  )
}

export default ProgramEnroll