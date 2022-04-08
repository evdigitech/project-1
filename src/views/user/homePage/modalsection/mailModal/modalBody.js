import React from "react";
import "../../../../../assets/css/skill.css";
import { ImAttachment } from "react-icons/im";
import { Formik,Form,ErrorMessage, Field } from "formik";
import FormikControl from "../../../profile/formikControl";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Footer from "../../../../../components/modal/footer";

const options = [
  { value: "Graphic Design", label: "Graphic Design" },
  { value: "Graphics", label: "Graphics" },
  { value: "Motion Graphic ", label: "Motion Graphic " },
  { value: "Graphic Art", label: "Graphic Art" },
  { value: "Computer Graphic", label: "Computer Graphic" },
];

function ModalBody({leaveHandler, setMailModal}) {
  let history = useHistory();
  const initialValues = {
    to: "",
    subject: "",
    message: "",
    attachFile: "",
  };
  const validationSchema = Yup.object({
    to: Yup.mixed().required("*Please fill this to"),
    subject: Yup.string().required("*Please fill this subject"),
    message: Yup.string().required("*Please fill this message"),
   
  });
  const onSubmit = (values) => {
    console.log("submit", values); 
    setMailModal(false)
    history.push("./mailPage");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
        <Form >
          <div className="pb-6 px-10">

          <div className="my-6">
            <p className="mb-2 text-[#7D7D89] ">
              To
              <span className="textrequired">(required)</span>
            </p>
            <FormikControl
              control="reactSelect"
              options={options}
              errorName="to"
              name="to"
            />
          </div>

          <div>
            <p className="mb-2 text-[#7D7D89] ">
              Subject
              <span className="textrequired">(required)</span>
            </p>
            <Field
              className=" fieldcss  form-textarea"
              type="text"
              name="subject"
            />

            <ErrorMessage
              className="error-text"
              name="subject"
              component="div"
            />
          </div>

          <div className="my-8">
            <div className="mb-2 justify-between flex mt-5 text-[#7D7D89]">
              <p>
                Message <span className="textrequired">(required)</span>
              </p>
              <p className=" mr-4 ">Max 5000 Chars.</p>
            </div>
            <Field
              as="textarea"
              cols="30"
              rows="10"
              maxLength={5000}
              name="message"
              className=" fieldcss h-[68px] form-textarea"
            ></Field>
            <ErrorMessage
              className="error-text"
              name="message"
              component="div"
            />
          </div>

          <div className="flex ">
            <div className="relative bg-[#E9E9ED] rounded-md">
              <label className=" text-[#0F69AF] font-bold px-6 py-4 text-lg flex ">
                <ImAttachment className="rotate-180 mr-2 text-[#0F69AF]" />
                Attach File
                <Field
                  type="file"
                  className="hidden"
                  name="attachFile"
                />
              </label>
            </div>

            <div className="text-[#7D7D89] mx-16 ">
              <p>File size Max:10 MB</p>
              <p>Allow file types: PDF, Word, Excel</p>
            </div>
          </div>
          </div>

          <h2 className="flex justify-between bg-[#F8F8FC] py-[15px] px-4 rounded-md sticky bottom-0">
            <div className="my-auto">
              
            </div>
            <div className=" flex gap-3 ">
              <button
                className=" py-4 md:px-10 px-5  bg-[#E9E9ED] text-[#0F69AF] font-black  text-center rounded-md "
                type="button"
                onClick={leaveHandler}
              >
                Cancel
              </button>
              <button
                className=" py-4 md:px-10 px-5 text-[#E9E9ED] bg-[#0F69AF] font-black   text-center rounded-md "
                type="submit"
              >
                Send
              </button>
            </div>
          </h2>
       
         
     
        </Form>
            )}
      </Formik>
    </>
  );
}

export default ModalBody;
