import React, { useEffect } from "react";
import { BsDashSquare, BsPencil, BsChevronDown } from "react-icons/bs";

import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { Fragment, useState } from "react";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { VscDiffAdded } from "react-icons/vsc";
import { Field, Form, Formik } from "formik";
import FormikControl from "../../../profile/formikControl";

const people = [
  {
    id: 1,
    name: "Sort",
  },
  {
    id: 2,
    name: "All",
  },
  {
    id: 3,
    name: "Overdue ",
  },
  {
    id: 4,
    name: "In Progress",
  },
  {
    id: 4,
    name: "Completed",
  },
];
const goalData = [
  {
    name: "Launch the mentoring product",
    dueDate: "10/17/2022",
    progress: "50%",
    key: [
      {
        result: " All feature in scoipe to a GA",
      },
      {
        result: "50% of customers import data to interface A",
      },
      {
        result:
          "Interface A plays a direct role in helping close 20 enterprise deals",
      },
      {
        result: "30% of monthly active users use interface A each week",
      },
    ],
  },
  {
    name: "Goal C",
    dueDate: "10/17/2022",
    progress: "80%",
    key: [
      {
        result: " All feature in scoipe to a GA",
      },
      {
        result: "50% of customers import data to interface A",
      },
      {
        result:
          "Interface A plays a direct role in helping close 20 enterprise deals",
      },
      {
        result: "30% of monthly active users use interface A each week",
      },
    ],
  },
  {
    name: "Lacinia enim cursus lacus...",
    dueDate: "10/17/2022",
    progress: "30%",
    key: [
      {
        result: " All feature in scoipe to a GA",
      },
      {
        result: "50% of customers import data to interface A",
      },
      {
        result:
          "Interface A plays a direct role in helping close 20 enterprise deals",
      },
      {
        result: "30% of monthly active users use interface A each week",
      },
    ],
  },
  {
    name: "Goal D",
    dueDate: "10/17/2022",
    progress: "100%",
    key: [
      {
        result: " All feature in scoipe to a GA",
      },
      {
        result: "50% of customers import data to interface A",
      },
      {
        result:
          "Interface A plays a direct role in helping close 20 enterprise deals",
      },
      {
        result: "30% of monthly active users use interface A each week",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function GoalApi({createhandler}) {
  const [selected, setSelected] = useState(people[0]);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const initialValues = {};
  const onSubmit = (values) => {
    console.log("first", values);
  };
  const editButtonHandler = (index) => {
    setEdit(!edit);
    setEditIndex(index)
  };

  return (
    <>
      <div className="text-lg font-medium  mb-2 text-right mr-5">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <div>
              <div className="mt-1 relative font-extrabold">
                <Listbox.Button className="relative bg-[#E9E9ED] w-36 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center font-bold">
                    <span className="ml-3 block truncate">{selected.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <BsChevronDown
                      className=" text-[#0F69AF] stroke-[2px]"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1  bg-white shadow-lg  rounded-md py-1 text-base  right-0  overflow-auto  sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-[#0F69AF] bg-[#E9E9ED]"
                              : "text-gray-900",
                            "cursor-default select-none  relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-medium" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
        </Listbox>
      </div>
      {/* <Formik initialValues={initialValues} onSubmit={onSubmit}> */}
      {/* <Form> */}
      <div className="  px-5  ">
        {goalData.length &&
          goalData.map((item, index) => (
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="border-2 border-[#E9E9ED] mb-4  py-5  px-5 rounded-md ">
                    <div className="justify-between flex">
                      <div className="flex">
                        <Disclosure.Button className="">
                          {open ? (
                            <BsDashSquare className="text-[#50a0de] font-bold text-xl my-auto " />
                          ) : (
                            <VscDiffAdded className="text-[#50a0de] font-bold text-2xl my-auto " />
                          )}
                        </Disclosure.Button>

                        <p className="font-bold text-xl px-3">
                          {/* <input type='text ' name="name" value={item.name}/> */}
                          {item.name}
                        </p>
                      </div>

                      <div className="flex  ">
                        <p
                          className={`${
                            open ? "text-[#E61E50] font-bold" : "text-[#7D7D89]"
                          } mx-5 my-auto `}
                        >
                          {open
                            ? "Overdue"
                            : item.progress !== "100%"
                            ? "In progress"
                            : "Completed"}
                        </p>
                        <div className="text-[#7D7D89] px-4 text-sm">
                          <p>{item.progress} Complete </p>
                          <div class="shadow  bg-grey-light ">
                            <div
                              className={`${
                                item.progress > "40%" && item.progress <= "99%"
                                  ? "bg-yellow-400"
                                  : item.progress === "100%"
                                  ? "bg-green-800"
                                  : item.progress <= "40%"
                                  ? "bg-red-600"
                                  : null
                              } h-2  leading-none py-1  text-center rounded-md text-white`}
                              style={{ width: item.progress }}
                            ></div>
                          </div>
                        </div>
                        <button type="button" onClick={()=>editButtonHandler(index)}>
                          {edit===true && editIndex===index  ? (
                            <RiDeleteBin5Line className="text-[#50a0de] font-bold text-xl" />
                          ) : (
                            <BsPencil className="text-[#50a0de] font-bold text-xl" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Disclosure.Panel>
                      <div className="text-[#7D7D89] text-sm my-4">
                        Due Date:
                        {/* <FormikControl
                              control="date"
                              name={`goals.${index}.date`}
                              
                            /> */}
                        {item.dueDate}
                      </div>

                      <div>
                        <div className="text-[#7D7D89] my-2 text-sm">
                          {" "}
                          Key Result:{" "}
                        </div>
                        {item.key.length &&
                          item.key.map((key, idx) => (
                            <div className="flex ">
                              <input
                                className="checkbox my-auto "
                                type="checkbox"
                              />
                              <label className="mx-2 text-lg font-medium text-[#1B1B25]">
                                {key.result}
                              </label>
                              {/* <input
                                    type="text"
                                    name={`goals[${index}].key[${idx}].result`}
                                    value={key.result}
                                    className="mx-2 text-lg font-medium text-[#1B1B25]"
                                  /> */}
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          ))}
      </div>
      <h2 className="flex justify-between bg-[#F8F8FC] py-[15px] px-4 rounded-md sticky bottom-0">
        <div className="my-auto">
          <p className="  text-[14px] text-black my-auto "></p>
        </div>
        <div className=" flex gap-3 ">
          <button
            className=" py-4 px-2 text-center text-[#0F69AF] font-black   "
            type="button"
            onClick={() => createhandler()}
          >
            + Add New Goal
          </button>
          <button
            className=" py-4 md:px-10 px-5  bg-[#E9E9ED] text-[#0F69AF] font-black  text-center rounded-md "
            type="button"
            // onClick={() => closeCreateGoalModal()}
          >
            Cancel
          </button>
          <button
            className=" py-4 md:px-10 px-5 text-[#E9E9ED] bg-[#0F69AF] font-black   text-center rounded-md "
            type="submit"
            // onClick={() => enrollHandler()}
          >
            Update
          </button>
        </div>
      </h2>
      {/* </Form>
      </Formik> */}
    </>
  );
}

export default GoalApi;
