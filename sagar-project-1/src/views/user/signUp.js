import React, { useState } from "react";
import "../../assets/css/signUp.css";
import SignUpImg from "../../assets/img/signup-img.svg";
import * as Yup from "yup";
import { BiShow } from "react-icons/bi";
import img1 from "../../assets/img/eye.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Passcode from "./passcodeSent";
import Profile from "../user/profile/profile";
import { setLastName, setFirstName, setFlagValue, setProfileEmail } from "../../redux/reduxHeader/action";
import { useDispatch } from "react-redux";
import pdf from "../../assets/pdf/signUp.pdf";
import Programs from "./programs/programs";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [mail, setMail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [flag, setFlag] = useState(0);
  const dispatch = useDispatch();

 

  const eyeHandler = () => {
    setShowPassword(!showPassword);
  };

  const confirmEyeHandler = () => {
    setShowCpassword(!showCpassword);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    pwd: "",
    cpwd: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("*please enter your first name "),
    lastName: Yup.string().required("*please enter your last name "),
    email: Yup.string().required("*please enter your email "),
    pwd: Yup.string().required("*please enter your password"),
    cpwd: Yup.string().required("*please enter your confirm password ").when("pwd", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("pwd")],
        "Both password need to be the same"
      )
    }),
  });
  const onSubmit = (value) => {
    console.log("value", value);
    setMail(value.email);
    setFname(value.firstName);
    setLname(value.lastName);
    if (value.pwd === value.cpwd) {
      setFlag(1);
    } 
    const payload = value.firstName;
   
    dispatch(setFirstName(payload));
    dispatch(setLastName(value.lastName));
    dispatch(setProfileEmail(value.email));
  };
  dispatch(setFlagValue(flag));
  const profilePageHandler = (value) => {
    setFlag(value);
  };

  const flagHandler = (value) => {
    setFlag(value);
  };
  return (
    <>
      <div className="flex-auto flex items-center py-5 ">
        <div className="flex md:gap-0  items-center m-auto">
          <div className="flex items-center text-[#0F69AF] relative">
            <div className="rounded-full transition duration-500 ease-in-out h-7 w-7 py-3 border-2 border-[#0F69AF]">
              {flag === 0 ? (
                <div
                  className=" rounded-full transition duration-500 ease-in-out h-3 w-3   bg-[#0F69AF] relative -top-1.5 left-1.5  "
                  style={{ color: "#0F69AF" }}
                ></div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 relative -top-4 right-1	"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className=" absolute top-0 -ml-12 text-center mt-7 w-32 text-xs   text-[#1B1B25]">
              Basic Info
            </div>
          </div>
          <div className="  border-t-2 transition duration-500 ease-in-out border-gray-300 md:w-24 w-8 "></div>
          <div className="flex items-center text-gray-500 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-7 w-7 py-3 border-2 border-gray-300">
              {flag === 1 ? (
                <div className=" rounded-full transition duration-500 ease-in-out h-3 w-3   bg-[#0F69AF] relative -top-1.5 left-1.5  "></div>
              ) : flag === 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0F69AF] relative -top-4 right-1	"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : flag === 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0F69AF] relative -top-4 right-1	"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>

            <div className=" absolute top-0 -ml-12 text-center mt-7 w-32 text-xs font-medium  text-gray-500 ">
              Passcode
            </div>
          </div>
          <div className="  border-t-2 transition duration-500 ease-in-out border-gray-300 md:w-24 w-6"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className=" rounded-full transition duration-500 ease-in-out h-7 w-7 py-3 border-2 border-gray-300 ">
              {flag === 2 ? (
                <div className=" rounded-full transition duration-500 ease-in-out h-3 w-3   bg-[#0F69AF] relative -top-1.5 left-1.5  "></div>
              ) : flag === 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0F69AF] relative -top-4 right-1	"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
            <div className=" absolute top-0 -ml-12 text-center mt-7 w-32 text-xs font-medium  text-gray-500 ">
              Profile
            </div>
          </div>
          <div className="  border-t-2 transition duration-500 ease-in-out border-gray-300 md:w-24 w-6"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className=" rounded-full transition duration-500 ease-in-out h-7 w-7 py-3 border-2 border-gray-300 ">
              {flag === 3 ? (
                <div className=" rounded-full transition duration-500 ease-in-out h-3 w-3   bg-[#0F69AF] relative -top-1.5 left-1.5  "></div>
              ) : (
                ""
              )}
            </div>
            <div className=" absolute top-0 -ml-12 text-center mt-7 w-32 text-xs font-medium  text-gray-500 ">
              Program
            </div>
          </div>
          <div className="  border-t-2 transition duration-500 ease-in-out border-gray-300 md:w-24 w-6"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className=" rounded-full transition duration-500 ease-in-out h-7 w-7 py-3 border-2 border-gray-300 "></div>
            <div className=" absolute top-0 -ml-12 text-center mt-7 w-[120px] text-xs font-medium  text-gray-500 ">
              Home
            </div>
          </div>
        </div>
        {flag === 2 ? (
          <div className=" text-[#0F69AF] font-bold md:text-sm text-xs md:mr-[47px] sm:mr-7 mr-1">
            <p> Next &nbsp; &nbsp; &gt;</p>
          </div>
        ) : flag ===3 ? (  <div className=" text-[#0F69AF] font-bold md:text-sm text-xs md:mr-[47px] sm:mr-7 mr-1">
        <Link to={"./homePage"}> Next &nbsp; &nbsp; &gt;</Link>
      </div>
         
        ): ""}
      </div>

      <div className="grid lg:grid-cols-12 grid-cols-4 xl:p-[50px] sm:p-[30px] p-0 mb-[19px]">
        {flag === 2 ? (
          ""
        ) : flag === 3 ? (
          ""
        ) : (
          <div className=" col-span-8 justify-center m-auto ">
            <div className=" lg:w-[538px] w-full lg:h-[351px] h-auto  ">
              <img src={SignUpImg} alt="background" />
            </div>
            <div>
              <div className=" text-center ">
                <h1 className="font-black text-[18px]">
                  Mentor & Mentee Platform
                </h1>
                <p className=" font-normal text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        )}
        {flag === 0 ? (
          <div className=" col-span-4 bg-gray-200  flex flex-col p-[34px]  h-auto xl:w-[430px] w-auto rounded-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {({ errors, touched }) => (
                <Form className="md:space-y-[30px] space-x-1" action="#">
                  <div className=" grid md:grid-cols-2 ml-1 grid-cols-1 md:gap-[22px] gap-1">
                    <div>
                      <label
                        htmlFor="text"
                        className="text-xs font-normal text-colorSignUp "
                      >
                        First Name
                        <span style={{ color: "#E61E50" }}> (required)</span>
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        style={
                          errors.firstName
                            ? { borderBottom: "2px solid #E61E50" }
                            : {}
                        }
                        className="bg-white rounded-md  focus:outline-none focus-all h-[40px] w-[100%] normal-case"
                      ></Field>
                      <ErrorMessage
                        className="error-text"
                        name="firstName"
                        component="div"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="text"
                        className="text-xs font-normal text-colorSignUp"
                      >
                        Last Name
                        <span style={{ color: "#E61E50" }}> (required)</span>
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        style={
                          errors.lastName
                            ? { borderBottom: "2px solid #E61E50" }
                            : {}
                        }
                        className="bg-white  rounded-md focus:outline-none focus-all  h-[40px] w-[100%] normal-case"
                      ></Field>
                      <ErrorMessage
                        className="error-text"
                        name="lastName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="text"
                      className="text-xs font-normal text-colorSignUp"
                    >
                      Work Email
                      <span style={{ color: "#E61E50" }}> (required)</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      style={
                        errors.email
                          ? { borderBottom: "2px solid #E61E50" }
                          : {}
                      }
                      className="bg-white  rounded-md focus:outline-none focus-all  h-[40px]  w-[100%]"
                    ></Field>
                    <ErrorMessage
                      className="error-text"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-xs font-normal text-colorSignUp"
                    >
                      Password
                      <span style={{ color: "#E61E50" }}> (required)</span>
                    </label>
                    {!showPassword && (
                      <img
                        src={img1}
                        className="eye"
                        onClick={() => eyeHandler()}
                        alt="img"
                      />
                    )}
                    {showPassword && (
                      <BiShow className="eye" onClick={() => eyeHandler()} />
                    )}

                    <Field
                      type={showPassword ? "text" : "password"}
                      name="pwd"
                      id="pwd"
                      className="bg-white  rounded-md focus:outline-none focus-all  h-[40px] w-[100%]"
                      placeholder=""
                      required=""
                      style={
                        errors.pwd ? { borderBottom: "2px solid #E61E50" } : {}
                      }
                    ></Field>
                    <ErrorMessage
                      className="error-text"
                      name="pwd"
                      component="div"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cpwd"
                      className="text-xs font-normal text-colorSignUp"
                    >
                      Confirm Password
                      <span style={{ color: "#E61E50" }}> (required)</span>
                    </label>
                    {!showCpassword && (
                      <img
                        src={img1}
                        className="eye"
                        onClick={() => confirmEyeHandler()}
                        alt="img"
                      />
                    )}
                    {showCpassword && (
                      <BiShow
                        className="eye  "
                        onClick={() => confirmEyeHandler()}
                      />
                    )}

                    <Field
                      type={showCpassword ? "text" : "password"}
                      name="cpwd"
                      id="cpwd"
                      className="bg-white  rounded-md focus:outline-none focus-all  h-[40px] w-[100%]"
                      style={
                        errors.cpwd ? { borderBottom: "2px solid #E61E50" } : {}
                      }
                    ></Field>
                    <ErrorMessage
                      className="error-text"
                      name="cpwd"
                      component="div"
                    />
                  </div>
                  <div className="text-sm text-center my-5  ">
                    By clicking Create Account, you agree to the
                    <br />
                    <a href={pdf} className=" text-[#2A79B7] " target="_blank">
                      User Agreement
                    </a>
                    ,&nbsp;
                    <a href={pdf} className="text-[#2A79B7] " target="_blank">
                      Privacy Policy{" "}
                    </a>
                    and&nbsp;
                    <a href={pdf} className="text-[#2A79B7] " target="_blank">
                      Cookie Policy.
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0F69AF] text-white h-[50px] rounded-lg text-sm font-black text-center"
                  >
                    Create Account
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        ) : flag === 1 ? (
          <Passcode data={mail} profilePageHandler={profilePageHandler} />
        ) : flag === 2 ? (
          <Profile
            data={mail}
            FirstName={fname}
            LastName={lname}
            flagHandler={flagHandler}
          />
        ) : flag === 3 ? (
          <Programs />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SignUp;
