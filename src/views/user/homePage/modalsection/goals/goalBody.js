import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { VscDiffAdded } from "react-icons/vsc";
import FormikControl from "../../../profile/formikControl";
import { BsDashSquare } from "react-icons/bs";
import Calander from "../../../../../assets/img/calanderHomeIcon.png";


function GoalBody({ closeCreateGoalModal, saveGoalModal }) {
  const [indexValue, setIndexValue] = useState(0);
  const initialValues = {
    goals: [],
  };
  const onSubmit = (values) => {
    console.log("first", values);
    saveGoalModal();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form className="min-h-96">
            <FieldArray name="goals">
              {({ insert, remove, push }) => (
                <div className="p-10 ">
                  {values.goals.length > 0 &&
                    values.goals.map((goals, index) => (
                      <div
                        className="border-2 border-[#E9E9ED] mb-8 py-5  px-5 rounded-md  "
                        key={index}
                      >
                      
                        <div className="flex ">
                          <div className=" pt-2">
                            <button
                              type="button"
                              className="  mr-4"
                              onClick={() => remove(index)}
                            >
                              <BsDashSquare className="text-[#50a0de] font-bold text-xl " />
                            </button>
                          </div>
                          <Field
                            name={`goals.${index}.name`}
                            placeholder="Enter goal name"
                            type="text"
                            className="fieldcss px-2 rounded-md"
                          />
                        </div>
                        <div className=" my-6 text-[#7D7D89]">
                          <label htmlFor={`goals.${index}.email`}>
                            Due date
                          </label>
                          <div className="flex">
                            <FormikControl
                              control="date"
                              name={`goals.${index}.date`}
                              placeHolder="mm / dd / yyyy"
                              className="fieldcss text-center  "
                            />
                            <img
                              src={Calander}
                              alt=""
                              className="mx-3 h-5 mt-3 w-5"
                            />
                          </div>
                        </div>
                        <div className="my-6 text-[#7D7D89] ">
                          <label className="">Key Result</label>
                          <div>

                          <FormikControl
                            control="array"
                            goals={goals}
                            index={index}
                            values={values}
                            />
                            </div>
                        </div>
                      </div>
                    ))}

                  <div className="  ">
                    <div className=" border-2 border-[#E9E9ED] py-4 px-3 rounded-md">
                      <button
                        type="button"
                        className="flex gap-4"
                        onClick={() =>
                          push({ name: "", date: "", key: [{ result: "" }] })
                        }
                      >
                          <VscDiffAdded className="text-[#468abd] font-bold text-3xl" />{" "}
                        <p className="text-xl   font-extrabold py-auto">
                          {values.goals.length > 0
                            ? "Add Goal"
                            : "Create your First Goal"}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </FieldArray>
            <h2 className="flex justify-between bg-[#F8F8FC] py-[15px] px-4 rounded-md sticky bottom-0">
              <div className="my-auto">
                <p className="  text-[14px] text-black my-auto "></p>
              </div>
              <div className=" flex gap-3 ">
                <button
                  className=" py-4 md:px-10 px-5  bg-[#E9E9ED] text-[#0F69AF] font-black  text-center rounded-md "
                  type="button"
                  onClick={() => closeCreateGoalModal()}
                >
                  Cancel
                </button>
                <button
                  className=" py-4 md:px-10 px-5 text-[#E9E9ED] bg-[#0F69AF] font-black   text-center rounded-md "
                  type="submit"
                  // onClick={() => enrollHandler()}
                >
                  Save
                </button>
              </div>
            </h2>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default GoalBody;
