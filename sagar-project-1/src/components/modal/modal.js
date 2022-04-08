import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal/lib/components/Modal";
import '../../assets/css/enrollModal.css'

function ModalComponent(props) {
  const {
    closeEnrollModal,
    submitEnroll,
    showModal,
    header,
    navBody,
    mainBody,
    footer,
  } = props;

  const [progress, setProgress] = useState(0);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: "70%",
     
    },
  };
  const enrollHandler = (e) => {
    closeEnrollModal();
    setProgress(progress === 100);
    console.log("submit", e);
    submitEnroll();
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Modal
          isOpen={showModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="sticky top-0 ">
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="  px-3 bg-[#F8F8FC]  rounded-t border-b-2 border-[#E9E9ED]"
            >
              <div className="flex justify-between">
                <h3 className="md:text-base text-sm mt-5 -mb-1.5 ">{header}</h3>
                <button
                  className="  mt-5 -mb-1.5  ml-auto"
                  onClick={closeEnrollModal}
                >
                  <IoMdClose className="text-[#0F69AF] text-2xl " />
                </button>
              </div>
              <br />
            </h2>

            <div
              ref={(_subtitle) => (subtitle = _subtitle)}
              className=" flex justify-between bg-white scroll-auto py-2 px-3  redcolor"
            >
              {navBody}
            </div>
          </div>

          <div>{mainBody}</div>

       
        
       
          {footer}
      </Modal>
    </div>
    </>
  );
}

export default ModalComponent;
