import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import "../../../assets/css/skill.css";

const skilOptions = [
  { value: "Graphic Design", label: "Graphic Design" },
  { value: "Graphics", label: "Graphics" },
  { value: "Motion Graphic ", label: "Motion Graphic " },
  { value: "Graphic Art", label: "Graphic Art" },
  { value: "Computer Graphic", label: "Computer Graphic" },
];
function Skill(props) {
  const { formik, addSkillData, setAddSkillData, setProgressSkill, progressSkill} = props;

  const [skillData, setSkillData] = useState([]);
  const [formskillValue, setFormskillValue] = useState("");

  // const [data,setData]=useState([])


  useEffect(() => {
    setSkillData(skilOptions);
    
  }, []);

  const skillDataSelect = (value) => {
    setAddSkillData([...addSkillData, value]);
    const newInput = skillData.filter((item) => item.value !== value);
    setSkillData(newInput);
   
  };

  const handleClose = (item, index) => {
    const newInput = [...addSkillData];
    setSkillData([...skillData, { label: item, value: item }]);
    newInput.splice(index, 1);
    setAddSkillData(newInput);
  };

  const ProgressSkillChange = () => {
    if (formskillValue !== "" ) {
      setProgressSkill(progressSkill + 100);
    }
  };
  return (
    <>
       <div className=" text-[#7D7D89] xl:text-sm lg:text-xs my-3 ">
                <div>
                  <label>Key Skills</label>
                  <select
                    name="skill"
                    className=" my-select fieldcss"
                    {...formik.getFieldProps("skill")}
                    id="skill"
                    onBlur={ProgressSkillChange}
                    onChange={(e) => {
                      setFormskillValue();
                      skillDataSelect(e.target.value);
                      // formik.setFieldValue("skill", e.target.value);
                    }}
                  >
                    <option>Option</option>
                    {skillData.length &&
                      skillData?.map((item, index) => {
                        return (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        );
                      })}
                  </select>
                  {addSkillData?.map((item, key) => {
                    return (
                      <div type="reset" key={key} className="inline-flex mt-4">
                        <span className="inline-flex gap-2 bg-white border-2 border-[#2A79B7] textblue mr-4 font-extrabold py-0.5 px-2 rounded-2xl">
                          {item}
                          <IoMdClose
                            onClick={(e) => handleClose(item, key)}
                            className=" stroke-[38px] my-auto h-auto cursor-pointer"
                          />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
    </>
  );
}

export default Skill;
