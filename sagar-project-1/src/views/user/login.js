import React, { useState } from "react";
import "../../assets/css/login.css";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { BiShow } from "react-icons/bi";
import img from "../../assets/img/Graphic.png";
import img1 from "../../assets/img/eye.svg";
import ForgotPassword from "./forgotPassword";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [flag, setFlag] = useState(false);
  const updateHandler = () => {
    setFlag(true);
  };

  const eyeHandler = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("*please enter your email id "),
    password: Yup.string().required("*please enter your password "),
  });
  const onSubmit = (value) => {
 
  };

  return (
    <>
      {flag ? (
        <ForgotPassword />
      ) : (
        <div className="items-center head bg-white-700 pb-[46px]">
          <div className=" md:w-7/12  mx-auto">
            <img
              src={img}
              className="w-full bg-cover bg-center grid md:w-full sm:grid-cols-3 "
              alt="img"
            />
          </div>
          <div
            className=" mt-10   sm:w-12/12 md:w-5/12"
            style={{ margin: "0 auto" }}
          >
            <div className="head-1">
              <div className=" shadow-md border justify-items-end  border-gray-200 rounded-lg  p-4 lg:p-8 card ">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                  enableReinitialize={true}
                >
                  {({ errors, touched }) => (
                    <Form className="space-y-6" action="#">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium  block mb-2 email-1 "
                        >
                          Email{" "}
                          <span style={{ color: "#E61E50" }}>(required)</span>
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
                          className="bg-gray-50  border input-em border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  border-none "
                          placeholder=""
                          required=""
                        ></Field>

                        <ErrorMessage
                          className="p-text"
                          name="email"
                          component="div"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="text-xs font-normal email-1"
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
                          <BiShow
                            className="eye"
                            onClick={() => eyeHandler()}
                          />
                        )}

                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          className="bg-white  rounded-md focus:outline-none input-em  h-[40px] w-[100%]"
                          placeholder=""
                          required=""
                          style={
                            errors.password
                              ? { borderBottom: "2px solid #E61E50" }
                              : {}
                          }
                        ></Field>
                        <ErrorMessage
                          className="p-text"
                          name="password"
                          component="div"
                        />
                      </div>

                      <div className=" w-full flex justify-end ">
                        <p
                          className=" forgot  "
                          onClick={() => updateHandler()}
                        >
                          Forgot Password?
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn-1"
                        style={{ marginTop: "35%" }}
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
