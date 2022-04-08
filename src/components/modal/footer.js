import React from "react";

function Footer(props) {
  const {
    closeEnrollModal,
    enrollHandler,
    submitButton,
    closeButton,
    footerText,
  } = props;

  return (
    <>
      <h2 className="flex justify-between bg-[#F8F8FC] py-[15px] px-4 rounded-md sticky bottom-0">
        <div className="my-auto">
          <p className="  text-[14px] text-black my-auto ">{footerText}</p>
        </div>
        <div className=" flex gap-3 ">
          <button
            className=" py-4 md:px-10 px-5  bg-[#E9E9ED] text-[#0F69AF] font-black  text-center rounded-md "
            type="button"
            onClick={() => closeEnrollModal()}
          >
            {closeButton}
          </button>
          <button
            className=" py-4 md:px-10 px-5 text-[#E9E9ED] bg-[#0F69AF] font-black   text-center rounded-md "
            type="submit"
            onClick={() => enrollHandler()}
          >
            {submitButton}
          </button>
        </div>
      </h2>
    </>
  );
}

export default Footer;
