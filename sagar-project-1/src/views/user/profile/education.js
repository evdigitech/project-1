import React, { useEffect, useState } from "react";
import country from "../../../utils/country.json";
import state from "../../../utils/state.json";
import city from "../../../utils/city.json";
import FormikControl from "./formikControl";


function Education(props) {
  const { formik , index, setProgressEducation } = props;
  const [educationCountryList, setEducationCountryList] = useState([]);
  const [educationStateList, setEducationStateList] = useState([]);
  const [educationCityList, setEducationCityList] = useState([]);
  const [formEducationValue, setFormEducationValue] = useState({
    universityOrInstitution: "",
    degree: "",
    fieldOfStudy: "",
    educationCountry: "",
    educationState: "",
    educationCity: "",
    educationDateFrom: "",
    educationDateTo: "",
    educationDescription: "",
  });
  


  useEffect(() => {
   
    setEducationCountryList(country);
  }, []);

  const educationCountrySelect = (value) => {
    const filterState = state.filter((item) => item.country_name === value);
    setEducationStateList(filterState);
    if (filterState && filterState.length > 0) {
      const filterCityone = city.filter(
        (item) => item.state_name === filterState
      );
      setEducationCityList(filterCityone);
    }
  };

  const educationStateHandler = (value) => {
    const filterCity = city.filter((item) => item.state_name === value);
    setEducationCityList(filterCity);
  };

  const ProgressEducationChange = () => {
    let educationIncrement = 0;
    if (
      formEducationValue.universityOrInstitution !== "" 
      
    ) {
      educationIncrement += 10;
    }
    if (formEducationValue.degree !== "" ) {
      educationIncrement += 10;
    }
    if (formEducationValue.fieldOfStudy !== "" ) {
      educationIncrement += 10;
    }
    if (formEducationValue.educationCountry !== "" ) {
      educationIncrement += 10;
    }
    if (formEducationValue.educationState !== "" ) {
      educationIncrement += 10;
    }
    if (formEducationValue.educationCity !== "" ) {
      educationIncrement += 10;
    }
    if (formEducationValue.educationDateFrom !== "" ) {
      educationIncrement += 10;
    }
    if (formEducationValue.educationDateTo !== "") {
      educationIncrement += 10;
    }
    if (formEducationValue.educationDescription !== "") {
      educationIncrement += 10;
    }

    setProgressEducation(educationIncrement);
  };
 
 
  const progressEducationHandler = (e) => {
    setFormEducationValue((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
  <>
  <div className="  text-[#7D7D89] xl:text-sm lg:text-xs mb-12  ">
                          <div className="my-3 ">
                            <div className=" grid grid-row-5 gap-y-10 ">
                              <div className=" profileGrid ">
                                <div className="     ">
                                  <p className=" mb-2">
                                    University or Institution
                                    <span className="textrequired">
                                      {" "}
                                      (required){" "}
                                    </span>
                                  </p>
                                  <input
                                    type="text"
                                    rows="10"
                                    name={`education.${index}.universityOrInstitution`}
                                    {...formik.getFieldProps(
                                      `education.${index}.universityOrInstitution`
                                    )}
                                    id="universityOrInstitution"
                                    onBlur={ProgressEducationChange}
                                    onChange={(e) => {
                                      progressEducationHandler(e);
                                      formik.setFieldValue(
                                        `education.${index}.universityOrInstitution`,
                                        e.target.value
                                      );
                                    }}
                                    className=" fieldcss"
                                  />
                                  {formik?.errors?.education?.length > 0
                                    ? formik?.errors?.education[index]
                                        ?.universityOrInstitution && (
                                        <div className="textrequired">
                                          {
                                            formik?.errors?.education[index]
                                              ?.universityOrInstitution
                                          }
                                        </div>
                                      )
                                    : null}
                                </div>
                                <div>
                                  <p className="mb-2">Degree</p>
                                  <input
                                    type="text"
                                    name={`education.${index}.degree`}
                                    {...formik.getFieldProps(
                                      `education.${index}.degree`
                                    )}
                                    id="degree"
                                    onBlur={ProgressEducationChange}
                                    onChange={(e) => {
                                      progressEducationHandler(e);
                                      formik.setFieldValue(
                                        `education.${index}.degree`,
                                        e.target.value
                                      );
                                    }}
                                    className=" fieldcss "
                                  />
                                </div>
                                <div>
                                  <p className="mb-2">Field of Study</p>
                                  <input
                                    type="text"
                                    name={`education.${index}.fieldOfStudy`}
                                    {...formik.getFieldProps(
                                      `education.${index}.fieldOfStudy`
                                    )}
                                    id="fieldOfStudy"
                                    onBlur={ProgressEducationChange}
                                    onChange={(e) => {
                                      progressEducationHandler(e);
                                      formik.setFieldValue(
                                        `education.${index}.fieldOfStudy`,
                                        e.target.value
                                      );
                                    }}
                                    className=" font my-select fieldcss"
                                  />
                                </div>
                              </div>
                              <div className=" profileGrid ">
                                <div className="md:mr-[7px] lg:mr-0 ">
                                  <p className="mb-2 ">
                                    Country
                                    <span className="textrequired">
                                      {" "}
                                      (required){" "}
                                    </span>
                                  </p>
                                  <select
                                    className="my-select fieldcss "
                                    name={`education.${index}.educationCountry`}
                                    {...formik.getFieldProps(
                                      `education.${index}.educationCountry`
                                    )}
                                    id="educationCountry"
                                    onBlur={ProgressEducationChange}
                                    onChange={(e) => {
                                      progressEducationHandler(e);
                                      educationCountrySelect(e.target.value);
                                      formik.setFieldValue(
                                        `education.${index}.educationCountry`,
                                        e.target.value
                                      );
                                    }}
                                  >
                                    <option>Option</option>
                                    {educationCountryList.length &&
                                      educationCountryList?.map((item, key) => {
                                        return (
                                          <option key={key} value={item.name}>
                                            {item.name}
                                          </option>
                                        );
                                      })}
                                  </select>
                                  {formik?.errors?.education?.length > 0
                                    ? formik?.errors?.education[index]
                                        ?.educationCountry && (
                                        <div className="textrequired">
                                          {
                                            formik?.errors?.education[index]
                                              ?.educationCountry
                                          }
                                        </div>
                                      )
                                    : null}
                                </div>
                                <div>
                                  <p className="mb-2">
                                    State / Province / Country
                                  </p>

                                  <select
                                    className=" my-select fieldcss"
                                    name={`education.${index}.educationState`}
                                    {...formik.getFieldProps(
                                      `education.${index}.educationState`
                                    )}
                                    id="educationState"
                                    onBlur={ProgressEducationChange}
                                    onChange={(e) => {
                                      progressEducationHandler(e);
                                      educationStateHandler(e.target.value);
                                      formik.setFieldValue(
                                        `education.${index}.educationState`,
                                        e.target.value
                                      );
                                    }}
                                  >
                                    <option>Option</option>
                                    {educationStateList?.length &&
                                      educationStateList?.map((item, index) => {
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
                                    name={`education.${index}.educationCity`}
                                    {...formik.getFieldProps(
                                      `education.${index}.educationCity`
                                    )}
                                    id="educationCity"
                                    onBlur={ProgressEducationChange}
                                    onChange={(e) => {
                                      progressEducationHandler(e);
                                      formik.setFieldValue(
                                        `education.${index}.educationCity`,
                                        e.target.value
                                      );
                                    }}
                                  >
                                    <option>Option</option>
                                    {educationCityList?.length &&
                                      educationCityList?.map((item, index) => {
                                        return (
                                          <option key={index} value={item.name}>
                                            {item.name}
                                          </option>
                                        );
                                      })}
                                  </select>
                                </div>
                              </div>

                              <div className=" md:inline-flex gap-3 ">
                                <div>
                                  <p className="mb-2">From</p>
                                  <FormikControl
                                      control="date"
                                      className="fieldcss text-center"
                                      placeholderText="mm / dd / yyyy"
                                      id="educationDateFrom"
                                      onBlur={ProgressEducationChange}
                                      name={`education.${index}.educationDateFrom`}
                                      onChange={(e) => {
                                        progressEducationHandler(e);
                                        formik.setFieldValue(
                                          `education.${index}.educationDateFrom`,
                                          e.target.value
                                        );
                                      }}
                                    />
                                  
                                </div>

                                <div>
                                  <p className="mb-2">To</p>
                                  <FormikControl
                                      control="date"
                                      className="fieldcss text-center"
                                      placeholderText="mm / dd / yyyy"
                                      id="educationDateTo"
                                      onBlur={ProgressEducationChange}
                                      name={`education.${index}.educationDateTo`}
                                      onChange={(e) => {
                                        progressEducationHandler(e);
                                        formik.setFieldValue(
                                          `education.${index}.educationDateTo`,
                                          e.target.value
                                        );
                                      }}
                                    />

                                 
                                </div>

                                <div className=" my-auto "></div>
                              </div>
                              <div>
                                <div className="mb-2 justify-between flex mt-5">
                                  <p>Description</p>
                                  <p className=" mr-4 ">Max 1000 Chars.</p>
                                </div>
                                <textarea
                                  cols="30"
                                  rows="10"
                                  name={`education.${index}.educationDescription`}
                                  {...formik.getFieldProps(
                                    `education.${index}.educationDescription`
                                  )}
                                  id="educationDescription"
                                  onBlur={ProgressEducationChange}
                                  onChange={(e) => {
                                    progressEducationHandler(e);
                                    formik.setFieldValue(
                                      `education.${index}.educationDescription`,
                                      e.target.value
                                    );
                                  }}
                                  maxLength={1000}
                                  className="fieldcss  h-[68px] form-textarea "
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
  </>
  );
}

export default Education;
