import React, { useEffect, useState } from 'react'
import country from "../../../utils/country.json";
import state from "../../../utils/state.json";
import city from "../../../utils/city.json";
import timeZone from "../../../utils/timeZone.json";
import "../../../assets/css/personalInfo.css";

function PersonalInfo(props) {

  const { formik, setProgressInfo} = props;

  // const [emailEntry, setEmailName] = useState(data);

  const [personalCountryList, setPersonalCountryList] = useState([]);
  const [personalStateList, setPersonalStateList] = useState([]);
  const [personalCityList, setPersonalCityList] = useState([]);
  const [timeZoneList, setTimeZoneList] = useState([]);
  const [formInfoValue, setFormInfoValue] = useState({
    careerLevel: "",
    gender: "",
    email: "",
    personalInfoCountry: "",
    personalInfoState: "",
    personalInfoCity: "",
    timeZone: "",
    profileDetails: "",
    proficiencys: "",
    languages: "",
  });


  useEffect(() => {
    setPersonalCountryList(country);
    setTimeZoneList(timeZone);
  }, []);
  
  const countrySelect = (value) => {
    const filterState = state.filter((item) => item.country_name === value);
    setPersonalStateList(filterState);
    if (filterState && filterState.length > 0) {
      const filterCityone = city.filter(
        (item) => item.state_name === filterState
      );
      setPersonalCityList(filterCityone);
    }
  };

  const stateSelect = (value) => {
    const filterCity = city.filter((item) => item.state_name === value);
    setPersonalCityList(filterCity);
  };
  const ProgressInfoChange = () => {
    let increment = 0;

    if (formInfoValue.gender !== "") {
      increment += 10;
    }
    if (formInfoValue.email !== "") {
      increment += 10;
    }
    if (formInfoValue.careerLevel !== "" ) {
      increment += 10;
    }
    if (formInfoValue.personalInfoCountry !== "") {
      increment += 10;
    }
    if (formInfoValue.personalInfoState !== "" ) {
      increment += 10;
    }
    if (formInfoValue.personalInfoCity !== "" ) {
      increment += 10;
    }
    if (formInfoValue.timeZone !== "" ) {
      increment += 10;
    }
    if (formInfoValue.profileDetails !== "") {
      increment += 10;
    }
    if (formInfoValue.languages !== "" ) {
      increment += 10;
    }
    if (formInfoValue.proficiencys !== "" ) {
      increment += 10;
    }

    setProgressInfo(increment);
  };
  const progressInfoHandler = (e) => {
    setFormInfoValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
    
    <div className="  text-[#7D7D89] xl:text-sm lg:text-xs mb-12 ">
                  <div className="my-3">
                    <p className="mb-2">Gender</p>
                    <div role="group" className="sm:inline-flex ">
                      <div>
                        <label className=" text-black mr-6 text-base  ">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="gender"
                            onBlur={ProgressInfoChange}
                            onChange={(e) => {
                              progressInfoHandler(e);
                              formik.setFieldValue("gender", e.target.value);
                            }}
                            // defaultChecked={formik.values.gender === "male"}
                            className=" form-radio radio"
                          />
                          Male
                        </label>
                      </div>
                      <div>
                        <label className=" text-black mr-6 text-base">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="gender"
                            onBlur={ProgressInfoChange}
                            onChange={(e) => {
                              progressInfoHandler(e);
                              formik.setFieldValue("gender", e.target.value);
                            }}
                            // defaultChecked={formik.values.gender === "female"}
                            className="  form-radio radio"
                          />
                          Female
                        </label>
                      </div>
                      <div>
                        <label className=" text-black text-base">
                          <input
                            type="radio"
                            name="gender"
                            id="gender"
                            onBlur={ProgressInfoChange}
                            onChange={(e) => {
                              progressInfoHandler(e);
                              formik.setFieldValue("gender", e.target.value);
                            }}
                            value="preferNotToSpecify"
                            // defaultChecked={
                            //   formik.values.gender === "preferNotToSpecify"
                            // }
                            className=" form-radio radio"
                          />
                          Prefer not to Specify
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-row-5 gap-y-10  ">
                    <div className=" profileGrid  ">
                      <div className=" opacity-50    ">
                        <p className=" mb-2">
                          Email
                          <span className="textrequired"> (required) </span>
                        </p>
                        <input    
                          name="email"
                          type="email"
                          id="email"
                          disabled={true}
                          {...formik.getFieldProps("email")}
                          onBlur={ProgressInfoChange}
                          onChange={(e) => {
                            progressInfoHandler(e);
                            formik.setFieldValue("email", e.target.value);
                          }}
                          className="fieldcss"
                        />
                      </div>
                      <div>
                        <p className="mb-2">
                          Career Level
                          <span className="textrequired"> (required) </span>
                        </p>
                        <select
                          name="careerLevel"
                          as="select"
                          id="careerLevel"
                          onBlur={ProgressInfoChange}
                          {...formik.getFieldProps("careerLevel")}
                          onChange={(e) => {
                            progressInfoHandler(e);
                            formik.setFieldValue("careerLevel", e.target.value);
                          }}
                          // required
                          className="my-select fieldcss"
                        >
                          <option value="default">Option</option>
                          <option value="juniorLevel">Junior Level</option>
                          <option value="midLevel">Mid Level</option>
                          <option value="seniorLevel">Senior Level</option>
                        </select>
                        {formik.touched.careerLevel && (
                          <div className="textrequired">
                            {formik.errors.careerLevel}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className=" profileGrid">
                      <div className="md:mr-[7px] lg:mr-0 ">
                        <p className="mb-2 ">
                          Country
                          <span className="textrequired"> (required) </span>
                        </p>
                        <select
                          className="my-select fieldcss"
                          name="personalInfoCountry"
                          {...formik.getFieldProps("personalInfoCountry")}
                          id="personalInfoCountry"
                          onBlur={ProgressInfoChange}
                          onChange={(e) => {
                            progressInfoHandler(e);

                            countrySelect(e.target.value);
                            formik.setFieldValue(
                              "personalInfoCountry",
                              e.target.value
                            );
                          }}
                        >
                          <option value="default">Option</option>
                          {personalCountryList.length &&
                            personalCountryList?.map((item, key) => {
                              return (
                                <option key={key} value={item.name}>
                                  {item.name}
                                </option>
                              );
                            })}
                        </select>
                        {formik.touched.personalInfoCountry && (
                          <div className="textrequired">
                            {formik.errors.personalInfoCountry}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="mb-2">State/Province/Country</p>
                        <select
                          name="personalInfoState"
                          className=" my-select fieldcss"
                          {...formik.getFieldProps("personalInfoState")}
                          id="personalInfoState"
                          onBlur={ProgressInfoChange}
                          onChange={(e) => {
                            progressInfoHandler(e);
                            stateSelect(e.target.value);
                            formik.setFieldValue(
                              "personalInfoState",
                              e.target.value
                            );
                          }}
                        >
                          <option value="default">Option</option>
                          {personalStateList.length &&
                            personalStateList?.map((item, index) => {
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
                          className="my-select fieldcss"
                          name="personalInfoCity"
                          {...formik.getFieldProps("personalInfoCity")}
                          id="personalInfoCity"
                          onBlur={ProgressInfoChange}
                          onChange={(e) => {
                            progressInfoHandler(e);
                            formik.setFieldValue(
                              "personalInfoCity",
                              e.target.value
                            );
                          }}
                        >
                          <option value="default">Option</option>
                          {personalCityList.length &&
                            personalCityList?.map((item, index) => {
                              return (
                                <option key={index} value={item.name}>
                                  {item.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div className=" profileGrid ">
                      <div className="col-span-2">
                        <p className="mb-2">
                          Time Zone
                          <span className="textrequired"> (required) </span>
                        </p>
                        <select
                          name="timeZone"
                          {...formik.getFieldProps("timeZone")}
                          id="timeZone"
                          onBlur={ProgressInfoChange}
                          onChange={(e) => {
                            progressInfoHandler(e);
                            formik.setFieldValue("timeZone", e.target.value);
                          }}
                          // required
                          className="my-select fieldcss"
                        >
                          <option value="default">Option</option>

                          {timeZoneList.length &&
                            timeZoneList?.map((item, index) => {
                              return (
                                <option key={index} value={item.text}>
                                  {item.text}
                                </option>
                              );
                            })}
                        </select>
                        {formik.touched.timeZone && (
                          <div className="textrequired">
                            {formik.errors.timeZone}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="my-10">
                    <div className="mb-2 justify-between flex mt-5">
                      <p>Profile Summary</p>
                      <p className=" mr-4 ">Max 1000 Chars.</p>
                    </div>
                    <textarea
                      cols="30"
                      rows="10"
                      name="profileDetails"
                      id="profileDetails"
                      {...formik.getFieldProps("profileDetails")}
                      onBlur={ProgressInfoChange}
                      onChange={(e) => {
                        progressInfoHandler(e);
                        formik.setFieldValue("profileDetails", e.target.value);
                      }}
                      maxLength={1000}
                      className=" fieldcss h-[68px] form-textarea"
                    ></textarea>
                  </div>
                </div>
    </>
  )
}

export default PersonalInfo