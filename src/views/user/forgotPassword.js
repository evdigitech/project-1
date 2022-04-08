import React from "react";
import "../../assets/css/forgotPassword.css";
import img from "../../assets/img/Graphic.png";

function ForgotPassword() {
  return (
    <>
      <div className="items-center head-5 bg-white-700 ">
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
          <div className="head-6">
            <div className=" shadow-md border justify-items-end  border-gray-200 rounded-lg  p-4 lg:p-8 card-3 ">
              <h6 className="change">Forgot Password</h6>
              <p className="we mt-3  mb-5">
                We've sent an email to you on tomalter@office.com please click
                on the link to continue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
