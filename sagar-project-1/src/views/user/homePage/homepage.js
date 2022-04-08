import React, { useEffect } from "react";
import ProgramCarousel from "./programCarousel";
import ProgramsAvailable from "./programsAvailable";
import CardToggle from "./cardToggle";
import RelationShipTable from "./relationShipTable";
import { setHeaderIcon } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderIcon(true));

  }, [])
  
  return (
    <>
    <div className="">

      <ProgramCarousel      
       />
      <div className="grid lg:grid-cols-12 grid-cols-4 lg:p-[50px] gap-[58px] ">
        <div className="lg:col-span-8  col-span-4 ">
          <CardToggle/>
        <RelationShipTable /> 
        </div>
        <div className="col-span-4 ">
          <ProgramsAvailable />
        </div>
      </div>
       </div>
    </>
  );
}

export default Homepage;
