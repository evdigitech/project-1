import React, { useState } from "react";
import "../../assets/css/password.css";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { BiShow } from "react-icons/bi";
import img from "../../assets/img/Graphic.png";
import img1 from "../../assets/img/eye.svg";

function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);

  const eyeHandler = () => {
    setShowPassword(!showPassword);
  };

  const confirmEyeHandler = () => {
    setShowCpassword(!showCpassword);
  };

  const initialValues = {
    password: "",
    cpassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("*please enter your password "),
    cpassword: Yup.string().required("*please confirm your password "),
  });
  const onSubmit = (value) => {
    
  };

  return (
    <>
      <div className="items-center head-3 bg-white-700 ">
        <div className=" md:w-7/12  mx-auto">
          <img
            src={img}
            className="w-full bg-cover bg-center grid md:w-full sm:grid-cols-3 "
            alt="img"
          />
        </div>
        <div
          className=" mt-10  sm:w-12/12 md:w-5/12"
          style={{ margin: "0 auto" }}
        >
          <div className="head-4">
            <div className=" shadow-md border justify-items-end  border-gray-200 rounded-lg  p-4 lg:p-8 card-1 ">
              <h6 className="change">Change Password</h6>
              <p className="reset mt-3 mb-5">
                We recommend you to reset your password first times.
              </p>
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
                        htmlFor="password"
                        className="text-xs  new-pwd font-normal "
                      >
                        New Password
                        <span style={{ color: "#E61E50" }}> (required)</span>
                      </label>
                      {!showPassword && (
                        <img
                          src={img1}
                          className="eye-1"
                          onClick={() => eyeHandler()}
                          alt="img"
                        />
                      )}
                      {showPassword && (
                        <BiShow
                          className="eye-1"
                          onClick={() => eyeHandler()}
                        />
                      )}

                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="bg-white input-p rounded-md focus:outline-none   h-[40px] w-[100%]"
                        placeholder=""
                        required=""
                        style={
                          errors.password
                            ? { borderBottom: "2px solid #E61E50" }
                            : {}
                        }
                      ></Field>
                      <ErrorMessage
                        className="pwd-text"
                        name="password"
                        component="div"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cpassword"
                        className="text-xs new-pwd font-normal text-colorSignUp"
                      >
                        Confirm Password
                        <span style={{ color: "#E61E50" }}> (required)</span>
                      </label>
                      {!showCpassword && (
                        <img
                          src={img1}
                          className="eye-1"
                          onClick={() => confirmEyeHandler()}
                          alt="img"
                        />
                      )}
                      {showCpassword && (
                        <BiShow
                          className="eye-1"
                          onClick={() => confirmEyeHandler()}
                        />
                      )}

                      <Field
                        type={showCpassword ? "text" : "password"}
                        name="cpassword"
                        id="cpassword"
                        className="bg-white  rounded-md focus:outline-none focus-all  h-[40px] w-[100%]"
                        style={
                          errors.cpassword
                            ? { borderBottom: "2px solid #E61E50" }
                            : {}
                        }
                      ></Field>
                      <ErrorMessage
                        className="pwd-text"
                        name="cpassword"
                        component="div"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn-2"
                      style={{ marginTop: "35%" }}
                    >
                      Update Password
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
