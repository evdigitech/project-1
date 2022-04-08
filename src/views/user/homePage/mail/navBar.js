import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function NavBar() {
  return (
    <>
      <div className="flex gap-2 font-semibold  py-3 px-5 bg-[#F8F8FC] text-sm ">
        <Link to={"./homePage"}> Home </Link>
        <MdOutlineKeyboardArrowRight className=" my-auto text-[#0F69AF] text-lg" />

        <Link to={"./mailPage"}> My Message</Link>
        <MdOutlineKeyboardArrowRight className=" my-auto text-[#0F69AF] text-lg" />

        <Link to={"./mailPage"} className="text-[#0F69AF]"> Inbox </Link>
       </div>
    </>
  );
}

export default NavBar;
