import React from "react";

const program = [
  {
    header: "Carrer Development",
    paragraph:
      "In this program we provide employees with the tools to take charge of their personal and professional development by learning from other who have been in their shoes before.",
    mentees: "50",
    mentors: "04",
  },
  {
    header: "Reverse Mentoring",
    paragraph:
      "In this program senoir employees are mentored by more junior employees. We recognize the knowledge and value of our younger employees, and in this program we provide them with the platform to share ideas with more senior employees.",
    mentees: "35",
    mentors: "04",
  },
  {
    header: " Diversity, Equity & Inclusion",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
    mentees: "78",
    mentors: "12",
  },
  {
    header: "Future Leaders",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
    mentees: "42",
    mentors: "09",
  },
];

function ProgramsAvailable() {
  const availablehandler =(value)=>{
    console.log("available", value)
  }
  return (
    <>
      <div className="bg-[#F8F8FC]  mb-24 p-6">
        <p className="font-bold text-base">Programs Available</p>
        {program?.map((item, index) => {
          return (
            <>
              <div className="mt-4" key={index} value={item.value}  >
                <p className="font-bold text-sm ">{item.header}</p>
                <div className="mt-4">
                  <p className="text-sm">{item.paragraph}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className=" mr-6 text-sm font-bold">
                      {item.mentees} Mentees
                    </div>
                    <div className="text-sm font-bold">
                      {item.mentors} Mentors
                    </div>
                  </div>

                  <div className="">
                    <button
                      className="h-[40px] bg-[#F8F8FC]  text-[#0F69AF] font-black px-4 py-2 text-sm text-center rounded-md "
                      type="button"
                      onClick={(value)=>availablehandler(item)}
                    >
                      View Program
                    </button>
                  </div>
                </div>
              </div>

              <hr/>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProgramsAvailable;
