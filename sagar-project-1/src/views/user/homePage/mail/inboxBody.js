import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";


const people = [
  {
    id: 1,
    program: "AB Mentoring Program",
    subject: "Client request payment  ",
    summary:
      "Client Amanda Rose, RQ776 Requested payment by Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat quidem incidunt tempora ad. Blanditiis sint sapiente veniam quibusdam praesentium.",
    date: "01/01/2022",
    time: "09:20 AM",
  },
  {
    id: 2,
    program: "AB Mentoring Program",

    subject: "Some problem with Nov 12 Extension ",
    summary:
      "Hi Tom! Do you know, The tax year consectetur adipisicing elit. Nobis quaerat quidem incidunt tempora ad. Blanditiis sint sapiente veniam quibusdam praesentium.",
    date: "12/27/2021",
    time: "03:48 PM",
  },
  {
    id: 3,
    program: "AB Mentoring Program",

    subject: "Follow Up",
    summary:
      "Hello, I would like to request for quick meeting for project  estimate dolor sit amet consectetur adipisicing elit. Nobis quaerat quidem incidunt tempora ad. Blanditiis sint sapiente veniam quibusdam praesentium.",
    date: "12/16/2021",
    time: "20:13 PM",
  },
  {
    id: 4,
    program: "AB Mentoring Program",

    subject: "Can I help you setup your program request",
    summary:
      "New program has been started on adipisicing elit. Nobis quaerat quidem incidunt tempora ad. Blanditiis sint sapiente veniam quibusdam praesentium.",
    date: "12/11/2020",
    time: "11:04 AM",
  },
  {
    id: 5,
    program: "AB Mentoring Program",

    subject: "Inform CPA he was assigned a client - ",
    summary:
      "New Client! RW 223, Darlene Lane  quidem incidunt tempora ad. Blanditiis sint sapiente veniam quibusdam praesentium.",
    date: "12/03/2021",
    time: "16:09 PM",
  },
];
function InboxBody() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(people);
  }, []);

  const handleChange = (e) => {
   
    const { name , checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
      user.subject === name ? { ...user, isChecked: checked } : user
      
      );
     
      setUsers(tempUser);
    }
  };
 


  return (
    <>
      <div className=" flex justify-between flex-col md:flex-row mb-10 ">
        <div className="flex lg:gap-10 md:gap-5 sm:gap-2 md:justify-start justify-between items-end md:mb-0 mb-10 sm:text-base text-xs">
          <div className="flex gap-2">
            <input type="checkbox" name="allSelect" id="allSelect" className="checkbox md"  checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange} />
            <label htmlFor="">Select all</label>
          </div>
          <div className="flex gap-2 text-[#0F69AF]">
            <FaMailBulk className="h-[26px] w-6 -mt-0.5" />
            <label htmlFor="">Unread</label>
          </div>
          <div className="flex gap-2 text-[#0F69AF]">
            <IoMailOpenOutline className="h-[26px] w-6 -mt-0.5" />
            <label htmlFor="">Read</label>
          </div>
          <div className="flex gap-2 text-[#0F69AF]">
            <BsTrash className="h-[26px] w-5" />
            <label htmlFor="">Delete</label>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="px-7 py-2.5 w-full bg-[#0F69AF] flex gap-3 rounded-lg text-white font-black justify-center"
          >
            <BsPencilSquare className="h-[26px] w-6 -mt-0.5" />
            Compose
          </button>
        </div>
      </div>
      {users.map((person, index) => (
        <div className="grid grid-cols-7 2xl:gap-3 gap-1 py-2 px-2  mb-2   border-2 rounded-lg   border-[#DADADA] items-center " key={index}>
          {console.log("users", person?.isChecked)}
          <div className="col-span-1 justify-self-center">
            <input type="checkbox" name={person.subject}   className="checkbox mt-1.5 "
             checked={person?.isChecked || false}
             onChange={handleChange} 
             />
          </div>
          <div className="md:col-span-1 col-span-6 font-black">
            <label htmlFor="">{person.program}</label>
          </div>
          <div className="md:col-span-3 col-span-7 flex flex-col md:flex-row">
            <p className="sm:whitespace-nowrap font-black">
              {person.subject} - &nbsp;
            </p>
            <p className="overflow-hidden whitespace-nowrap text-ellipsis text-[#7D7D89]">
              {person.summary}
            </p>
          </div>
          <div className="md:col-span-1 col-span-3 text-[#7D7D89]">{person.date}</div>
          <div className="md:col-span-1 col-span-3 text-[#7D7D89]">{person.time}</div>
        </div>
      ))}
    </>
  );
}

export default InboxBody;
