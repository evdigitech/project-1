import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function ChangePassword() {
  const initialValues = {
    confirmNewPassword: "",
    newPassword: "",
    currentPassword: "",
  };
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("*Please fill this currentPassword"),
    newPassword: Yup.string().required("*Please fill this newPassword"),
    confirmNewPassword: Yup.string()
      .required("*please enter your confirm password ")
      .when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("newPassword")],
          "Both password need to be the same"
        ),
      }),
  });
  const onSubmit = (value) => {
    console.log("submit", value);
  };
  return (
    <>
      <div className="flex gap-2 font-semibold  py-3 px-5 bg-[#F8F8FC] text-sm ">
        <Link to={"./homePage"}> Home </Link>
        <MdOutlineKeyboardArrowRight className=" my-auto text-[#0F69AF] text-lg" />

      

        <Link to={"./mailPage"} className="text-[#0F69AF]">
          {" "}
          Settings{" "}
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-12 lg:p-[50px] p-6  gap-6">
          <div className="md:col-span-3 col-span-12   ">
            <p className=" bg-[#E9E9ED] h-auto font-black py-3 px-4 text-[#0F69AF] w-auto ">
              Change Password
            </p>
          </div>

          <div className="md:col-span-9 col-span-12 ">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-8  text-2xl font-black">
                    <h3>Change Pasword</h3>
                  </div>
                  <div className="mb-20">
                    <div className="mb-10">
                      <p className="mb-2 text-[#7D7D89] ">
                        Current Password
                        <span className="textrequired">(required)</span>
                      </p>
                      <Field
                        className=" fieldcss lg:w-1/2 form-textarea"
                        type="text"
                        name="currentPassword"
                      />

                      <ErrorMessage
                        className="textrequired"
                        name="currentPassword"
                        component="div"
                      />
                    </div>
                    <div className="mb-10">
                      <p className="mb-2 text-[#7D7D89] ">
                        New Password

                        <span className="textrequired">(required)</span>
                      </p>
                      <Field
                        className=" fieldcss lg:w-1/2 form-textarea"
                        type="text"
                        name="newPassword"
                      />

                      <ErrorMessage
                        className="textrequired"
                        name="newPassword"
                        component="div"
                      />
                    </div>
                    <div className="mb-10">
                      <p className="mb-2 text-[#7D7D89] ">
                        Confirm New Password
                        <span className="textrequired">(required)</span>
                      </p>
                      <Field
                        className=" fieldcss lg:w-1/2 form-textarea"
                        type="text"
                        name="confirmNewPassword"
                      />

                      <ErrorMessage
                        className="textrequired"
                        name="confirmNewPassword"
                        component="div"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between bg-[#F8F8FC] mt-5 py-[15px] h-auto px-4 sticky bottom-0 rounded-md ">
                      <div className="my-auto"></div>
                      <div className=" flex gap-3 ">
                        <button
                          className=" py-4 lg:px-10 px-5  bg-[#E9E9ED] text-[#0F69AF] font-black  text-center rounded-md "
                          type="reset"
                        >
                          Clear
                        </button>
                        <button
                          className=" py-4 lg:px-10 px-5 text-[#E9E9ED] bg-[#0F69AF] font-black   text-center rounded-md "
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
