import React, { useEffect, useState } from "react";
import country from "../../../utils/country.json";
import state from "../../../utils/state.json";
import city from "../../../utils/city.json";
import FormikControl from "./formikControl";

function Experience(props) {
  const { formik, index, setProgressWork } = props;
  const [experienceCountryList, setExperienceCountryList] = useState([]);
  const [experienceStateList, setExperienceStateList] = useState([]);
  const [experienceCityList, setExperienceCityList] = useState([]);
  const [checkBox, setCheckBox] = useState(false);

  const [formWorkValue, setFormWorkValue] = useState({
    companyName: "",
    jobTitle: "",
    employentType: "",
    workExperienceCountry: "",
    workExperienceState: "",
    workExperienceCity: "",
    experienceDateFrom: "",
    experienceDateTo: "",
    experienceDescription: "",
  });
  useEffect(() => {
    setExperienceCountryList(country);
  }, []);
  const workExperienceCountrySelect = (value) => {
    const filterState = state.filter((item) => item.country_name === value);
    setExperienceStateList(filterState);
    if (filterState && filterState.length > 0) {
      const filterCityone = city.filter(
        (item) => item.state_name === filterState
      );
      setExperienceCityList(filterCityone);
    }
  };
  const workExperienceStateHandler = (value) => {
    const filterCity = city.filter((item) => item.state_name === value);
    setExperienceCityList(filterCity);
  };
  const checkBoxHandler = () => {
    setCheckBox(!checkBox);
  };
  const ProgressWorkChange = () => {
    let workIncrement = 0;
    if (formWorkValue.companyName !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.jobTitle !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.employmentType !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.workExperienceCountry !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.workExperienceState !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.workExperienceCity !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.experienceDateFrom !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.experienceDateTo !== "") {
      workIncrement += 10;
    }
    if (formWorkValue.experienceDescription !== "") {
      workIncrement += 10;
    }

    setProgressWork(workIncrement);
  };
  const progressWorkHandler = (e) => {
    console.log("value", e);
    setFormWorkValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <>
      <div className="  text-[#7D7D89] xl:text-sm lg:text-xs mb-12 ">
        <div className="my-3 ">
          <div className=" grid grid-row-5 gap-y-10 ">
            <div className=" profileGrid ">
              <div className="     ">
                <p className=" mb-2">
                  Company Name
                  <span className="textrequired"> (required) </span>
                </p>
                <input
                  name={`experience[${index}].companyName`}
                  {...formik.getFieldProps(`experience.${index}.companyName`)}
                  id="companyName"
                  onBlur={ProgressWorkChange}
                  onChange={(e) => {
                    progressWorkHandler(e);
                    formik.setFieldValue(
                      `experience[${index}].companyName`,
                      e.target.value
                    );
                  }}
                  type="text"
                  // required
                  className=" fieldcss"
                />
                {formik?.errors?.experience?.length > 0
                  ? formik?.errors?.experience[index]?.companyName && (
                      <div className="textrequired">
                        {formik?.errors?.experience[index]?.companyName}
                      </div>
                    )
                  : null}
              </div>
              <div>
                <p className="mb-2">
                  Job Title
                  <span className="textrequired"> (required) </span>
                </p>
                <input
                  type="text"
                  name={`experience.${index}.jobTitle`}
                  {...formik.getFieldProps(`experience.${index}.jobTitle`)}
                  id="jobTitle"
                  onBlur={ProgressWorkChange}
                  onChange={(e) => {
                    progressWorkHandler(e);
                    formik.setFieldValue(
                      `experience.${index}.jobTitle`,
                      e.target.value
                    );
                  }}
                  // required
                  className=" fieldcss "
                />
                {formik?.errors?.experience?.length > 0
                  ? formik?.errors?.experience[index]?.jobTitle && (
                      <div className="textrequired">
                        {formik?.errors?.experience[index]?.jobTitle}
                      </div>
                    )
                  : null}
              </div>
              <div>
                <p className="mb-2">Employment Type</p>
                <select
                  as="select"
                  name={`experience.${index}.employeeType`}
                  {...formik.getFieldProps(`experience.${index}.employeeType`)}
                  id="employeeType"
                  onBlur={ProgressWorkChange}
                  onChange={(e) => {
                    progressWorkHandler(e);

                    formik.setFieldValue(
                      `experience.${index}.employeeType`,
                      e.target.value
                    );
                  }}
                  className=" font my-select fieldcss"
                >
                  <option value="default" disabled selected hidden>
                    Option
                  </option>
                  <option value="fullTime">Full Time</option>
                  <option value="partTime">Part Time</option>
                </select>
              </div>
            </div>
            <div className=" profileGrid ">
              <div className="md:mr-[7px] lg:mr-0 ">
                <p className="mb-2 ">
                  Country
                  <span className="textrequired"> (required) </span>
                </p>
                <select
                  className="my-select fieldcss "
                  name={`experience.${index}.workExperienceCountry`}
                  {...formik.getFieldProps(
                    `experience.${index}.workExperienceCountry`
                  )}
                  id="workExperienceCountry"
                  onBlur={ProgressWorkChange}
                  onChange={(e) => {
                    workExperienceCountrySelect(e.target.value);
                    progressWorkHandler(e);

                    formik.setFieldValue(
                      `experience.${index}.workExperienceCountry`,
                      e.target.value
                    );
                  }}
                >
                  <option>Option</option>
                  {experienceCountryList.length &&
                    experienceCountryList?.map((item, key) => {
                      return (
                        <option key={key} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
                {formik?.errors?.experience?.length > 0
                  ? formik?.errors?.experience[index]
                      ?.workExperienceCountry && (
                      <div className="textrequired">
                        {
                          formik?.errors?.experience[index]
                            ?.workExperienceCountry
                        }
                      </div>
                    )
                  : null}
              </div>
              <div>
                <p className="mb-2">State / Province / Country</p>

                <select
                  className=" my-select fieldcss"
                  name={`experience.${index}.workExperienceState`}
                  {...formik.getFieldProps(
                    `experience.${index}.workExperienceState`
                  )}
                  id="workExperienceState"
                  onBlur={ProgressWorkChange}
                  onChange={(e) => {
                    progressWorkHandler(e);
                    workExperienceStateHandler(e.target.value);
                    formik.setFieldValue(
                      `experience.${index}.workExperienceState`,
                      e.target.value
                    );
                  }}
                >
                  <option>Option</option>
                  {experienceStateList?.length &&
                    experienceStateList?.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className=" col-span-1 md:mr-6 xl:mr-0 ">
                <p className="mb-2">City</p>
                <select
                  className=" my-select fieldcss"
                  name={`experience.${index}.workExperienceCity`}
                  {...formik.getFieldProps(
                    `experience.${index}.workExperienceCity`
                  )}
                  id="workExperienceCity"
                  onBlur={ProgressWorkChange}
                  onChange={(e) => {
                    progressWorkHandler(e);
                    formik.setFieldValue(
                      `experience.${index}.workExperienceCity`,
                      e.target.value
                    );
                  }}
                >
                  <option>Option</option>
                  {experienceCityList?.length &&
                    experienceCityList?.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="inline-flex">
              <input
                type="checkbox"
                name={`experience.${index}.check`}
                {...formik.getFieldProps(`experience.${index}.check`)}
                className=" w-6 h-6 rounded-full mr-2"
                onChange={(e) => {
                  checkBoxHandler(e.target.value);
                  formik.setFieldValue(
                    `experience.${index}.check`,
                    e.target.value
                  );
                }}
              />
              <p className="font-[17px] text-black ">This is my current role</p>
            </div>
            <div className=" md:inline-flex gap-3 ">
              <div>
                <p className="mb-2">
                  From
                  <span className="textrequired"> (required) </span>
                </p>
                <FormikControl
                  control="date"
                  className="fieldcss text-center"
                  placeholderText="mm / dd / yyyy"
                  id="experienceDateFrom"
                  onBlur={ProgressWorkChange}
                  name={`experience.${index}.experienceDateFrom`}
                  onChange={(e) => {
                    progressWorkHandler(e);
                    formik.setFieldValue(
                      `experience.${index}.experienceDateFrom`,
                      e.target.value
                    );
                  }}
                />
                {formik?.errors?.experience?.length > 0
                  ? formik?.errors?.experience[index]?.experienceDateFrom && (
                      <div className="textrequired">
                        {formik?.errors?.experience[index]?.experienceDateFrom}
                      </div>
                    )
                  : null}
              </div>
              {checkBox === true ? (
                ""
              ) : (
                <div>
                  <p className="mb-2">
                    To
                    <span className="textrequired">(required)</span>
                  </p>
                  <FormikControl
                    control="date"
                    className="fieldcss text-center"
                    placeholderText="mm / dd / yyyy"
                    id="experienceDateTo"
                    onBlur={ProgressWorkChange}
                    name={`experience.${index}.experienceDateTo`}
                    onChange={(e) => {
                      progressWorkHandler(e);
                      formik.setFieldValue(
                        `experience.${index}.experienceDateTo`,
                        e.target.value
                      );
                    }}
                  />
                  {formik?.errors?.experience?.length > 0
                    ? formik?.errors?.experience[index]?.experienceDateTo && (
                        <div className="textrequired">
                          {formik?.errors?.experience[index]?.experienceDateTo}
                        </div>
                      )
                    : null}
                </div>
              )}
            </div>
            <div>
              <div className="mb-2 justify-between flex mt-5">
                <p>Job Description</p>
                <p className=" mr-4 ">Max 1000 Chars.</p>
              </div>
              <textarea
                cols="30"
                rows="10"
                name={`experience.${index}.experienceDescription`}
                {...formik.getFieldProps(
                  `experience.${index}.experienceDescription`
                )}
                id="experienceDescription"
                onBlur={ProgressWorkChange}
                onChange={(e) => {
                  progressWorkHandler(e);
                  formik.setFieldValue(
                    `experience.${index}.experienceDescription`,
                    e.target.value
                  );
                }}
                maxLength={1000}
                className="fieldcss  h-[68px] form-textarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
