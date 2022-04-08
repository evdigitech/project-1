import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal/lib/components/Modal";
import "../../../assets/css/enrollModal.css";
import Footer from "../../../components/modal/footer";
import ModalComponent from "../../../components/modal/modal";
import EnrollModalBody from "./enrollModal/enrollModalBody";
import NavBody from "./enrollModal/navBody";

function EnrollModal({ closeEnrollModal, submitEnroll, showModal }) {
  const [progress, setProgress] = useState(0);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const enrollHandler = (e) => {
    closeEnrollModal();

    submitEnroll();
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalComponent
        closeEnrollModal={closeEnrollModal}
        submitEnroll={submitEnroll}
        showModal={showModal}
        header="Questionnaires"
        navBody={<NavBody progress={progress} />}
        mainBody={<EnrollModalBody />}
        footer={
          <Footer
            closeEnrollModal={closeEnrollModal}
            enrollHandler={enrollHandler}
            submitButton="Enroll"
            closeButton="Cancel"
            footerText="To enroll please fill the application first"
          />
        }
      />
    </>
  );
}

export default EnrollModal;
