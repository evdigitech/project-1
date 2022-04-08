import React, { useState } from "react";
import "../../../assets/css/profile.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import experience from "../../../assets/img/experience.svg";
import education from "../../../assets/img/education.svg";
import language from "../../../assets/img/language.svg";
import FormikControl from "./formikControl";
import { Form, Formik } from "formik";
import * as yup from "yup";
import "../../../assets/css/toggle.css";
import TitleProfile from "./titleProfile";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../../../redux/actions";

export default function Profile({ data, FirstName, LastName, flagHandler }) {
  const [emailEntry, setEmailName] = useState(data);
  const [firstNameEntry, setFirstNameEntry] = useState(FirstName);
  const [lastNameEntry, setLastNameEntry] = useState(LastName);
  const [progressInfo, setProgressInfo] = useState(0);
  const [addExperience, setAddExperience] = useState(1);
  const [addEducation, setAddEducation] = useState(1);
  const [addLanguage, setAddLanguage] = useState(1);
  const [progressWork, setProgressWork] = useState(0);
  const [progressSkill, setProgressSkill] = useState(0);
  const [progressEducation, setProgressEducation] = useState(0);
  const [addSkillData, setAddSkillData] = useState([]);

  const initialValues = {
    image: "",
    firstName: firstNameEntry,
    lastName: lastNameEntry,
    gender: "",
    email: emailEntry,
    careerLevel: "",
    personalInfoCountry: "",
    personalInfoState: "",
    personalInfoCity: "",
    timeZone: "",
    profileDetails: "",
    language: [],
    experience: [
      {
        experienceDateFrom: null,
        experienceDateTo: null,
      },
    ],
    education: [
      {
        educationDateFrom: null,
        educationDateTo: null,
      },
    ],
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    gender: yup.string(),
    email: yup.string(),
    careerLevel: yup.string().required("*Please fill this section"),
    personalInfoCountry: yup.string().required("*Please fill this section"),
    personalInfoState: yup.string(),
    personalInfoCity: yup.string(),
    timeZone: yup.string().required("*Please fill this section"),
    profileDetails: yup.string(),
    experience: yup.array().of(
      yup.object().shape({
        companyName: yup.string().required("*Please fill this section"),
        jobTitle: yup.string().required("*Please fill this section"),

        workExperienceCountry: yup
          .string()
          .required("*Please fill this section"),

        experienceDateFrom: yup
          .string()
          .required("*Please fill this section")
          .nullable(),
        experienceDateTo: yup
          .string()
          .required("*Please fill this section")
          .nullable(),
      })
    ),
    education: yup.array().of(
      yup.object().shape({
        universityOrInstitution: yup
          .string()
          .required("*Please fill this section"),

        educationCountry: yup.string().required("*Please fill this section"),
      })
    ),
  });

  const addLanguageHandler = () => {
    setAddLanguage(addLanguage + 1);
  };
  const languageDeleteHandler = () => {
    setAddLanguage(addLanguage - 1);
  };
  const experenceHandleClick = (index) => {
    setAddExperience(addExperience + 1);
  };
  const experenceDeleteHandle = (index) => {
    setAddExperience(addExperience - 1);
  };
  const educationHandleClick = () => {
    setAddEducation(addEducation + 1);
  };
  const educationDeleteHandle = () => {
    setAddEducation(addEducation - 1);
  };

  const buttonHandler = () => {
    flagHandler(3);
  };
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    values.skill = addSkillData;
    console.log("values", values);

    dispatch(setFirstName(values.firstName));
    dispatch(setLastName(values.lastName));
  };
  

  return (
    <>
      <TitleProfile
        progressInfo={progressInfo}
        progressWork={progressWork}
        progressSkill={progressSkill}
        progressEducation={progressEducation}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="col-span-9 w-full md:w-auto md:mr-[12px] md:ml-3 mr-1 ml-0">
            <div className=" border border-gray-300 p-5 rounded w-full md:h-[136px] mt-8 ">
              <FormikControl control="profileCard" formik={formik} />
            </div>
            <div className=" mt-12 mb-8 ">
              <h1 className="profileHeading">Personal Information</h1>
              <div className="profileBorder">
                <FormikControl
                  control="personalInfo"
                  data={data}
                  formik={formik}
                  setProgressInfo={setProgressInfo}
                />
              </div>
              {Array.from(Array(addLanguage)).map((c, index) => {
                return (
                  <>
                    <div
                      className=" inline-flex float-right gap-1 -mt-5 cursor-pointer "
                      onClick={languageDeleteHandler}
                    >
                      <RiDeleteBin5Line className=" text-[#7D7D89] h-4 w-4" />
                      <span className="text-[#7D7D89]  text-sm m-auto">
                        Delete
                      </span>
                    </div>
                    <div className="profileBorder">
                      <div
                        className=" grid md:grid-cols-3 grid-cols-1 mb-10 gap-x-8"
                        key={language}
                      >
                        <FormikControl
                          control="language"
                          index={index}
                          formik={formik}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
              <button
                type="button"
                className="textblue font-bold text-[17px]  w-[130px] mb-10"
                onClick={addLanguageHandler}
              >
                + Add Language
              </button>
            </div>
            {/* </div> */}
            <hr />
            <div>
              <h1 className="profileHeading">Work Experience</h1>
              {addExperience === 0 ? (
                <div className="text-center  profileBorder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto"
                    fill="none"
                    viewBox="0 0 32 32"
                    stroke="#7D7D89"
                  >
                    <path d="M28.703 29.333h-25.333c-0.010 0-0.021 0-0.032 0-1.823 0-3.301-1.478-3.301-3.301 0-0.011 0-0.023 0-0.034v0.002-16c-0-0.010-0-0.021-0-0.032 0-1.823 1.478-3.301 3.301-3.301 0.011 0 0.023 0 0.034 0h25.332c0.010-0 0.021-0 0.032-0 1.823 0 3.301 1.478 3.301 3.301 0 0.011-0 0.023-0 0.034v-0.002 16c0 0.010 0 0.021 0 0.032 0 1.823-1.478 3.301-3.301 3.301-0.011 0-0.023-0-0.034-0h0.002zM3.369 8c-1.093 0.028-1.972 0.907-2 1.997l-0 0.003v16c0.028 1.093 0.907 1.972 1.997 2l0.003 0h25.333c1.093-0.028 1.972-0.907 2-1.997l0-0.003v-16c-0.028-1.093-0.907-1.972-1.997-2l-0.003-0z"></path>
                    <path d="M20.703 8c-0.012 0.001-0.025 0.001-0.038 0.001-0.348 0-0.629-0.282-0.629-0.629 0-0.014 0-0.027 0.001-0.040l-0 0.002v-2.667c0.001-0.011 0.001-0.025 0.001-0.038 0-0.348-0.282-0.629-0.629-0.629-0.014 0-0.027 0-0.040 0.001l0.002-0h-6.667c-0.011-0.001-0.025-0.001-0.039-0.001-0.348 0-0.629 0.282-0.629 0.629 0 0.014 0 0.027 0.001 0.040l-0-0.002v2.667c0 0.368-0.298 0.667-0.667 0.667s-0.667-0.298-0.667-0.667v0-2.667c0.028-1.093 0.907-1.972 1.997-2l0.003-0h6.667c1.093 0.028 1.972 0.907 2 1.997l0 0.003v2.667c0.001 0.011 0.001 0.025 0.001 0.038 0 0.348-0.282 0.629-0.629 0.629-0.014 0-0.027-0-0.040-0.001l0.002 0z"></path>
                    <path d="M16.036 18.667h-0.267l-15.333-5.333c-0.257-0.14-0.429-0.408-0.429-0.717 0-0.077 0.011-0.152 0.031-0.222l-0.001 0.006c0.14-0.257 0.408-0.429 0.717-0.429 0.077 0 0.151 0.011 0.222 0.031l-0.006-0.001 15.067 5.333 15.067-5.333c0.073-0.037 0.159-0.059 0.25-0.059 0.273 0 0.501 0.196 0.549 0.456l0.001 0.003c0.037 0.073 0.059 0.159 0.059 0.25 0 0.273-0.196 0.501-0.456 0.549l-0.003 0.001-15.333 5.333c0 0.133 0 0.133-0.133 0.133z"></path>
                  </svg>

                  <label className="text-[#7D7D89]">
                    {" "}
                    No experience added{" "}
                  </label>
                </div>
              ) : (
                <>
                  {Array.from(Array(addExperience)).map((c, index) => {
                    return (
                      <>
                        <div
                          className=" inline-flex float-right gap-1 -mt-5 cursor-pointer "
                          onClick={experenceDeleteHandle}
                        >
                          <RiDeleteBin5Line className=" text-[#7D7D89] h-4 w-4" />
                          <span className="text-[#7D7D89]  text-sm m-auto">
                            Delete
                          </span>
                        </div>
                        <div className="profileBorder " key={experience}>
                          <FormikControl
                            control="experience"
                            index={index}
                            formik={formik}
                            setProgressWork={setProgressWork}
                          />
                        </div>
                      </>
                    );
                  })}
                </>
              )}
              <button
                type="button"
                className="textblue  font-bold text-[17px] mb-12"
                onClick={experenceHandleClick}
              >
                + Add Work Experience
              </button>
              <hr />
            </div>
            <h1 className="profileHeading">Skill</h1>
            <div className=" mb-8 profileBorder ">
              <FormikControl
                control="skills"
                formik={formik}
                addSkillData={addSkillData}
                setAddSkillData={setAddSkillData}
                setProgressSkill={setProgressSkill}
                progressSkill={progressSkill}
              />
            </div>
            <hr />

            <h1 className="profileHeading">Education</h1>
            {addEducation === 0 ? (
              <div className="text-[#7D7D89] fill-[#7D7D89] text-center  profileBorder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke="#7D7D89"
                >
                  <path d="M30.933 10.643l-12.752-6.231c-0.6-0.261-1.3-0.413-2.035-0.413s-1.434 0.152-2.069 0.426l0.034-0.013-13.045 6.231c-0.598 0.206-1.027 0.747-1.066 1.393l-0 0.004c0 0.329 0.147 0.916 1.067 1.393l1.067 0.513v5.867c-0.665 0.268-1.127 0.903-1.136 1.648v0.001c0.010 0.732 0.451 1.359 1.080 1.639l0.012 0.005-1.649 5.241h4.619l-1.649-5.241c0.651-0.273 1.1-0.905 1.1-1.642 0-0.75-0.466-1.392-1.124-1.652l-0.012-0.004v-5.243l1.943 0.953v7.624c0.003 0.124 0.043 0.238 0.111 0.331l-0.001-0.002c2.46 2.987 6.159 4.877 10.299 4.877 0.091 0 0.182-0.001 0.272-0.003l-0.014 0c0.076 0.002 0.166 0.003 0.257 0.003 4.129 0 7.817-1.891 10.245-4.854l0.019-0.023c0.066-0.092 0.106-0.206 0.109-0.329v-7.589l4.321-2.125c0.596-0.205 1.024-0.742 1.066-1.385l0-0.005c-0.057-0.644-0.479-1.177-1.055-1.394l-0.011-0.004zM25.439 22.96c-2.261 2.611-5.58 4.253-9.283 4.253-0.061 0-0.122-0-0.183-0.001l0.009 0c-0.052 0.001-0.113 0.001-0.174 0.001-3.703 0-7.023-1.642-9.27-4.238l-0.013-0.015v-6.933l7.588 3.629c0.575 0.253 1.245 0.4 1.949 0.4 0.024 0 0.047-0 0.071-0l-0.004 0c0.035 0.001 0.077 0.002 0.118 0.002 0.704 0 1.369-0.163 1.961-0.453l-0.026 0.012 7.257-3.556zM30.424 12.403l-4.4 2.163c-0.009-0.001-0.019-0.001-0.029-0.001-0.159 0-0.298 0.088-0.37 0.219l-0.001 0.002-7.955 3.849c-0.455 0.191-0.984 0.302-1.539 0.302s-1.084-0.111-1.566-0.312l0.027 0.010-9.791-4.692 11.253-1.32c0.288-0.032 0.509-0.274 0.509-0.567 0-0.315-0.256-0.571-0.571-0.571-0.017 0-0.033 0.001-0.050 0.002l0.002-0-13.048 1.539-1.32-0.623c-0.171-0.060-0.31-0.176-0.398-0.326l-0.002-0.003c0-0.036 0.073-0.183 0.4-0.329l13.049-6.267c0.432-0.186 0.934-0.294 1.462-0.294 0.014 0 0.029 0 0.043 0l-0.002-0c0.027-0.001 0.059-0.001 0.090-0.001 0.524 0 1.022 0.108 1.474 0.304l-0.024-0.009 12.756 6.229c0.329 0.147 0.4 0.293 0.4 0.367-0.102 0.142-0.237 0.254-0.394 0.327l-0.006 0.003z"></path>
                </svg>

                <label className="text-[#7D7D89]"> No education added </label>
              </div>
            ) : (
              <>
                {Array.from(Array(addEducation)).map((c, index) => {
                  return (
                    <>
                      <div
                        className=" inline-flex float-right gap-1 -mt-5 cursor-pointer "
                        onClick={educationDeleteHandle}
                      >
                        <RiDeleteBin5Line className=" text-[#7D7D89] h-4 w-4" />
                        <span className="text-[#7D7D89]  text-sm m-auto">
                          Delete
                        </span>
                      </div>
                      <div className="profileBorder " key={education}>
                        <FormikControl
                          control="education"
                          index={index}
                          formik={formik}
                          setProgressEducation={setProgressEducation}
                        />
                      </div>
                    </>
                  );
                })}
              </>
            )}
            <button
              type="button"
              className="textblue  font-bold text-[17px] mb-12"
              onClick={educationHandleClick}
            >
              + Add Education
            </button>

            <div className="mb-20 bg-[#F8F8FC] py-[15px] px-4 rounded-md">
              <div className="flex gap-5 justify-end   ">
                <button
                  type="submit"
                  className="h-[50px] w-[150px] bg-[#E9E9ED] textblue font-black  text-center rounded-md "
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={buttonHandler}
                  className="h-[50px] w-[150px] bgblue text-white font-black text-center rounded-md"
                >
                  Continue
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
