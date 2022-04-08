import React, { useEffect, useState } from "react";
import messageicon from "../../../../assets/img/messageicon.png";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const details = [
  {
    name: "Jane Cooper",
    Designation: "Regional Paradigm Technician",
    country: "texas",
    role: "Mentor",
    startDate: "05/02/2021",
    endDate: "11/31/2021",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    personal: [
      {
        gender: "Female",
        carrerLevel: "professional",
        personalCountry: "US",
        personalState: "texas",
        personalCity: "Dallas",
        timeZone: "(GMT-06:00) Central Time (America/Chicago)",
        profileSummary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",

        language: [
          {
            languages: "English",
            proficiency: "professional",
          },
          {
            languages: "Spanish",
            proficiency: "professional",
          },
        ],
      },
    ],
    experience: [
      {
        companyName: "XYZ",
        jobTitle: "IT Head",
        employmentType: "Full Time",
        experienceCountry: "US",
        experienceState: "Texas",
        experienceCity: "Dallas",
        startDate: "April 2021",
        endDate: "",
        jobDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
      {
        companyName: "XYZ",
        jobTitle: "CEO",
        employmentType: "Full Time",
        experienceCountry: "US",
        experienceState: "Texas",
        experienceCity: "Houston",
        startDate: "Jun 2020",
        endDate: "Feb 2021",
        jobDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
    ],
    skills: [
      {
        name: "Web Design",
      },
      {
        name: "User Interface Design",
      },
      {
        name: "User Experience",
      },
      {
        name: "Mobile Application",
      },
      {
        name: "Usability",
      },
      {
        name: "UX Research",
      },
      {
        name: "Responsive Web Design",
      },
      {
        name: "Graphic Design",
      },
      {
        name: "Sketching",
      },
    ],
    education: [
      {
        universityorInstitution: "University of North Texas",
        degree: "Post Graduate",
        fieldofStudy: "Full time",
        educationCountry: "US",
        educationState: "Texas",
        educationCity: "Denton",
        toDate: "Mar 2019 ",
        fromDate: "Apr 2021",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
      {
        universityorInstitution: "University of Texas",
        degree: "Graduate",
        fieldofStudy: "Full time",
        educationCountry: "US",
        educationState: "Texas",
        educationCity: "Houston",
        toDate: "Mar 2017",
        fromDate: "Mar 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
    ],
  },
  {
    name: "Robin Parkson",
    Designation: "Design Lead",
    country: "Singapore",
    role: "Mentor",
    startDate: "02/05/2021",
    endDate: "12/31/2021",
    avatar: "https://avatars.githubusercontent.com/u/1071625?v=4",
    personal: [
      {
        gender: "Male",
        carrerLevel: "professional",
        personalCountry: "Singapore",
        personalState: "texas",
        personalCity: "Dallas",
        timeZone: "(GMT-06:00) Central Time (America/Chicago)",
        profileSummary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",

        language: [
          {
            languages: "English",
            proficiency: "professional",
          },
          {
            languages: "Spanish",
            proficiency: "professional",
          },
        ],
      },
    ],

    experience: [
      {
        companyName: "XYZ",
        jobTitle: "IT Head",
        employmentType: "Full Time",
        experienceCountry: "US",
        experienceState: "Texas",
        experienceCity: "Dallas",
        startDate: "April 2021",
        endDate: "",
        jobDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
      {
        companyName: "XYZ",
        jobTitle: "CEO",
        employmentType: "Full Time",
        experienceCountry: "US",
        experienceState: "Texas",
        experienceCity: "Houston",
        startDate: "Jun 2020",
        endDate: "Feb 2021",
        jobDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
    ],
    skills: [
      {
        name: "Web Design",
      },
      {
        name: "User Interface Design",
      },
      {
        name: "User Experience",
      },
      {
        name: "Mobile Application",
      },
      {
        name: "Usability",
      },
      {
        name: "UX Research",
      },
      {
        name: "Responsive Web Design",
      },
      {
        name: "Graphic Design",
      },
      {
        name: "Sketching",
      },
    ],
    education: [
      {
        universityorInstitution: "University of North Texas",
        degree: "Post Graduate",
        fieldofStudy: "Full time",
        educationCountry: "US",
        educationState: "Texas",
        educationCity: "Denton",
        toDate: "Mar 2019 ",
        fromDate: "Apr 2021",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
      {
        universityorInstitution: "University of Texas",
        degree: "Graduate",
        fieldofStudy: "Full time",
        educationCountry: "US",
        educationState: "Texas",
        educationCity: "Houston",
        toDate: "Mar 2017",
        fromDate: "Mar 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
    ],
  },
  {
    name: "Anne Lawrence",
    Designation: "COO",
    country: "Canada",
    role: "Mentor",
    startDate: "08/18/2020",
    endDate: "06/31/2021",
    avatar:
      "https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg",
    personal: [
      {
        gender: "Female",
        carrerLevel: "professional",
        personalCountry: "Canada",
        personalState: "texas",
        personalCity: "Dallas",
        timeZone: "(GMT-06:00) Central Time (America/Chicago)",
        profileSummary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",

        language: [
          {
            languages: "English",
            proficiency: "professional",
          },
          {
            languages: "Spanish",
            proficiency: "professional",
          },
        ],
      },
    ],
    experience: [
      {
        companyName: "XYZ",
        jobTitle: "IT Head",
        employmentType: "Full Time",
        experienceCountry: "US",
        experienceState: "Texas",
        experienceCity: "Dallas",
        startDate: "April 2021",
        endDate: "",
        jobDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
      {
        companyName: "XYZ",
        jobTitle: "CEO",
        employmentType: "Full Time",
        experienceCountry: "US",
        experienceState: "Texas",
        experienceCity: "Houston",
        startDate: "Jun 2020",
        endDate: "Feb 2021",
        jobDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
    ],
    skills: [
      {
        name: "Web Design",
      },
      {
        name: "User Interface Design",
      },
      {
        name: "User Experience",
      },
      {
        name: "Mobile Application",
      },
      {
        name: "Usability",
      },
      {
        name: "UX Research",
      },
      {
        name: "Responsive Web Design",
      },
      {
        name: "Graphic Design",
      },
      {
        name: "Sketching",
      },
    ],
    education: [
      {
        universityorInstitution: "University of North Texas",
        degree: "Post Graduate",
        fieldofStudy: "Full time",
        educationCountry: "US",
        educationState: "Texas",
        educationCity: "Denton",
        toDate: "Mar 2019 ",
        fromDate: "Apr 2021",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
      {
        universityorInstitution: "University of Texas",
        degree: "Graduate",
        fieldofStudy: "Full time",
        educationCountry: "US",
        educationState: "Texas",
        educationCity: "Houston",
        toDate: "Mar 2017",
        fromDate: "Mar 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam dolorem mollitia veritatis placeat, repudiandae excepturi non, ratione cupiditate minus quo debitis, neque a fugit aperiam illo ducimus error omnis?",
      },
    ],
  },
];

function ProfileDetailMainBody({ data }) {
  const [dataValue, setDataValue] = useState([]);
  const [flag, setFlag] = useState([]);
  useEffect(() => {
    setDataValue(data);
    const filterState = details.filter((item) => item.name === data.name);
    setFlag(filterState);
  }, []);

  return (
    <>
      {flag.map((item, index) => (
        <div className="mx-4 rounded-[6px]">
          <div className="flex sm:flex-row flex-col justify-between mx-4 my-3">
            <div className="flex sm:flex-row flex-col gap-3">
              <div>
                <img
                  src={item.avatar}
                  alt=""
                  className="sm:max-h-28 sm:max-w-28 h-full w-full  rounded-full"
                />
              </div>
              <div className="py-2">
                <p className="text-xl font-bold text-black-900"> {item.name}</p>
                <p className="text-[#1B1B2580] text-sm">
                  {item.Designation}, {item.country}
                </p>
                <br />
                <p className="text-sm">{item.role}</p>
              </div>
            </div>

            <button
              type="button"
              className="flex gap-2 py-2 bg-[#F8F8FC] px-5 h-full rounded-md  "
            >
              <img className="h-6 w-5 pt-1" src={messageicon} />
              <p className="text-[#0F69AF]  font-bold">Chat History</p>
            </button>
          </div>

          <div className="pb-20">
            {item.personal.map((personalData, index) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-extrabold text-left ">
                      <span className="font-bold text-lg">Personal</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4  text-sm text-gray-500">
                      <div className="  text-[#7D7D89] xl:text-sm lg:text-xs  ">
                        <div className=" grid grid-row-5 gap-y-5  ">
                          <div className=" profileGrid  ">
                            <div>
                              <p className="">Gender</p>
                             
                              <div className="text-black font-medium text-base">
                                {personalData.gender}
                              </div>
                            </div>

                            <div>
                              <p className="">Career Level</p>
                             
                              <div className="text-black font-medium text-base">
                                {personalData.carrerLevel}
                              </div>
                            </div>
                          </div>
                          <div className=" profileGrid">
                            <div className="md:mr-[7px] lg:mr-0 ">
                              <p className=" ">Country</p>
                            
                              <div className="text-black font-medium text-base">
                                {personalData.personalCountry}
                              </div>
                            </div>
                            <div>
                              <p className="">State/Province/Country</p>
                              <div className="text-black font-medium text-base">
                                {personalData.personalState}
                              </div>
                            </div>
                            <div className=" col-span-1 md:mr-6 xl:mr-0 ">
                              <p className="">City</p>
                             
                              <div className="text-black font-medium text-base">
                                {personalData.personalCity}
                              </div>
                            </div>
                          </div>
                          <div className=" profileGrid ">
                            <div className="col-span-2">
                              <p className="">Time Zone</p>
                             
                              <div className="text-black font-medium text-sm">
                                {personalData.timeZone}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-5">
                          <div className=" justify-between flex mt-5">
                            <p>Profile Summary</p>
                          </div>
                         
                          <div className="text-black font-medium text-sm">
                            {personalData.profileSummary}
                          </div>
                        </div>
                        {personalData.language.map((language, index) => (
                          <div className=" profileGrid mb-5 ">
                            <div>
                              <p className=" ">Languages</p>
                            
                              <div className="text-black font-medium text-sm">
                                {language.languages}
                              </div>
                            </div>
                            <div>
                              <p className="">Proficiency</p>
                           
                              <div className="text-black font-medium text-sm">
                                {language.proficiency}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-extrabold text-left ">
                    <span className="font-bold text-lg">Experience</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 `}
                    />
                  </Disclosure.Button>
                  {item.experience.map((experienceData, index) => (
                    <Disclosure.Panel className="px-4   text-sm ">
                      <div className="  text-[#7D7D89] xl:text-sm lg:text-xs mb-5 ">
                        <div className="my-2 ">
                          <div className=" grid grid-row-5 gap-y-6 ">
                            <div className=" profileGrid ">
                              <div className="     ">
                                <p className=" ">Company Name</p>
                               
                                <div className="text-black font-medium text-sm">
                                  {experienceData.companyName}
                                </div>
                              </div>
                              <div>
                                <p className="">Job Title</p>
                               
                                <div className="text-black font-medium text-sm">
                                  {experienceData.jobTitle}
                                </div>
                              </div>
                              <div>
                                <p className="">Employment Type</p>
                               
                                <div className="text-black font-medium text-sm">
                                  {experienceData.employmentType}
                                </div>
                              </div>
                            </div>

                            <div className=" profileGrid ">
                              <div className="md:mr-[7px] lg:mr-0 ">
                                <p className=" ">Country</p>
                              
                                <div className="text-black font-medium text-sm">
                                  {experienceData.experienceCountry}
                                </div>
                              </div>

                              <div>
                                <p className="">
                                  State / Province / Country
                                </p>
                             
                                <div className="text-black font-medium text-sm">
                                  {experienceData.experienceState}
                                </div>
                              </div>

                              <div className=" col-span-1 md:mr-6 xl:mr-0 ">
                                <p className="">City</p>
                            
                                <div className="text-black font-medium text-sm">
                                  {experienceData.experienceCity}
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="font-[17px]  ">Start date</p>
                              <div className="text-black font-medium text-sm">
                                {experienceData.startDate} -
                                {experienceData.endDate.length !== 0
                                  ? experienceData.endDate
                                  : "Present"}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className=" justify-between  mt-5">
                              <p>Job Description</p>
                             
                              <div className="text-black font-medium text-sm">
                                {experienceData.jobDescription}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                          <hr className="text-[#7D7D89]"/>
                    </Disclosure.Panel>
                  ))}
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-extrabold text-left ">
                    <span className="font-bold text-lg">Skill</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
                    <div
                      className="text-black font-medium text-sm grid grid-cols-3 gap-3"
                      key={index}
                    >
                      {item.skills.map((skill, index) => (
                        <div>{skill.name}</div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-extrabold text-left ">
                    <span className="font-bold text-lg">Education</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 `}
                    />
                  </Disclosure.Button>
                  {item.education.map((educationData)=>(
                  <Disclosure.Panel className="px-4  pb-2 text-sm text-gray-500">
                    <div className="  text-[#7D7D89] xl:text-sm lg:text-xs   ">
                      <div className="my-3 ">
                        <div className=" grid grid-row-5 gap-y-5 ">
                          <div className=" profileGrid ">
                            <div className="     ">
                              <p className=" ">University or Institution</p>
                             
                              <div className="text-black font-medium text-sm">
                                {educationData.universityorInstitution}
                              </div>
                            </div>
                            <div>
                              <p className="">Degree</p>
                             
                              <div className="text-black font-medium text-sm">
                                {educationData.degree}
                              </div>
                            </div>
                            <div>
                              <p className="">Field of Study</p>
                             
                              <div className="text-black font-medium text-sm">
                                {educationData.fieldofStudy}
                              </div>
                            </div>
                          </div>
                          <div className=" profileGrid ">
                            <div className="md:mr-[7px] lg:mr-0 ">
                              <p className=" ">Country</p>
                            
                              <div className="text-black font-medium text-sm">
                               {educationData.educationCountry}
                              </div>
                            </div>
                            <div>
                              <p className="">State / Province / Country</p>
                             
                              <div className="text-black font-medium text-sm">
                                {educationData.educationState}
                              </div>
                            </div>
                            <div className=" col-span-1 md:mr-6 xl:mr-0 ">
                              <p className="">City</p>
                             
                              <div className="text-black font-medium text-sm">
                               {educationData.educationCity}
                              </div>
                            </div>
                          </div>
                          <div className=" col-span-1 mr-6 xl:mr-0 ">
                            <p className="">Date</p>

                            <div className="text-black font-medium text-sm">
                              {educationData.fromDate} - {educationData.fromDate}
                            </div>
                          </div>

                          <div>
                            <div className=" justify-between  ">
                              <p>Description</p>
                              
                              <div className="text-black font-medium text-sm">
                                {educationData.description}
                              </div>
                            </div>
                          </div>
                          <hr className="text-[#7D7D89]"/>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                  ))}

                </>
              )}
            </Disclosure>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProfileDetailMainBody;
