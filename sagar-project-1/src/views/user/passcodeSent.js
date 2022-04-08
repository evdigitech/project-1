import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../assets/css/signUp.css";
import TimerResend from "./timerResend";

function Passcode({ data, profilePageHandler }) {
  const [passcode, setPasscode] = useState("");
  const [afterSubmit, setAfterSubmit] = useState(true);
  const [timer, setTimer] = useState(false);
  const resendHandler = () => {
    setTimer(!timer);
  };

  const initialValues = {
    passcode: passcode,
  };
  
  const passcodeHandler = (e) => {
    setTimer(false);

    setPasscode(e.target.value);
  };
  const validationSchema = Yup.object({
    passcode: Yup.string().required("*please enter passcode number")
    .min(6, '6 letters required')
    .max(6, '6 letters only')
  });

  const onSubmit = ( value) => {
  console.log("value", value)
  };

  const buttonHandler = () => {
    setAfterSubmit(false);
    setTimeout(() => {
      profilePageHandler(2);
    }, 2000);
  };

  return (
    <>
      <div className=" col-span-4 bg-gray-200 flex flex-col p-[34px] md:h-[549px] h-auto place-content-between xl:w-[430px] w-auto rounded-lg">
        {afterSubmit ? (
          <div>
            <h1 className="font-bold mb-3">Passcodes</h1>
            <h1 className="  ">We've sent a passcode to your email: {data}</h1>
          </div>
        ) : (
          <div
            className=" inline-flex bg-white text-green-600  px-4 py-3 rounded relative"
            role="alert"
          >
            <div className=" flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-10 h-4 md:w-10 w-4 mr-1.5 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className=" ">
              <strong className="font-bold md:text-base text-sm ">
                SUCCESS
              </strong>
              <br />
              <p className=" md:text-sm text-xs">
                Your verification is successfully done.
              </p>
            </div>
          </div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {({  values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         onChange,
         isSubmitting, }) => (
            <form className={`space-y-[30px] `} onSubmit={handleSubmit} action="#">
              <div>
                <label
                  htmlFor="text"
                  className="text-xs font-normal text-colorSignUp "
                >
                  Enter Passcode
                  <span style={{ color: "#E61E50" }}>(required)</span>
                  <button
                    type="button"
                    className="btn float-right text-sm inline-flex "
                    onClick={resendHandler}
                  >
                    Resend Code &nbsp; {timer ? <TimerResend /> : null}
                  </button>
                </label>

                <input
                  type="number"
                  name="passcode"
                  id="passcode"
                  pattern="[0-9]{6}"
                 
                  className="bg-white rounded-md focus:outline-none md:h-[40px] h-auto w-[100%] focus-all"
                  disabled={afterSubmit ? false : true}
                  value={values.passcode}
                  onChange={(e) => passcodeHandler(e)}
                /><ErrorMessage
                className="error-text"
                name="passcode"
                component="div"
              />
              </div>
              <div disabled={afterSubmit ? false : true}>
                <button
                  type="submit"
                  className={`w-full ${
                    passcode ? "bg-[#0F69AF]" : "bg-[#9FC3DF]"
                  }  
                text-white h-[50px] rounded-lg text-sm font-black text-center`}
                  onClick={buttonHandler}
                  disabled={passcode ? false : true}
                >
                  Continue
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Passcode;
