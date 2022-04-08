import { Field, FieldArray } from "formik";
import React, { useState } from "react";
import { IoMdClose, IoMdAdd } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { BiGridVertical } from "react-icons/bi";
import { ReactSortable } from "react-sortablejs";

function Arraybody({ name, goals, index, values, ...rest }) {
  const [first, setfirst] = useState(values.goals[index].key)
  return (
    <>
      <FieldArray name={`goals.${index}.key`}>
        {({ insert, remove, push }) => (
          <div className="flex gap-5 flex-col">
              
            {values.goals[index].key &&
              values.goals[index].key.length > 0 &&
              values.goals[index].key.map((key, idx) => (
              
                  <div className="flex  gap-1" key={idx}>
                    <BiGridVertical className="text-[28px] my-auto text-[#7D7D89]" />
                    <Field
                      name={`goals[${index}].key[${idx}].result`}
                      type="text"
                      className="fieldcss rounded-md "
                    />
                    <button onClick={() => remove(idx)} type="button">
                      <IoMdClose className="mx-2 font-extrabold my-auto text-xl text-[#7D7D89]" />
                    </button>
                  </div>
            
              ))}
            <button
              type="button"
              className="flex  self-end mr-10 text-[#0F69AF] font-extrabold"
              onClick={() =>
                push({
                  result: "",
                })
              }
              >
              <IoMdAdd className=" my-auto " />
              Add
            </button>
          </div>
        )}
      </FieldArray>
    </>
  );
}

export default Arraybody;
