import { React, useState } from "react";
import Footer from "../../../../../components/modal/footer";
import ModalComponent from "../../../../../components/modal/modal";
import ModalBody from "./modalBody";

function ModalSection({ showModal, closeAllMailModal, setMailModal }) {
  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const leaveHandler = () => {

    setShowDiscardModal(true);
  };

  const closeDiscardModal = () => {
    setShowDiscardModal(false);
  };
  const yesDiscardModal = () => {
    closeAllMailModal();
    setShowDiscardModal(false);
  };
  return (
    <>
      <ModalComponent
        header="Compose Mail"
        closeEnrollModal={leaveHandler}
        mainBody={
          <ModalBody
          leaveHandler={leaveHandler}
           
            setMailModal={setMailModal}
          />
        }
        showModal={showModal}
        // footer={
        //   <Footer
        //     closeButton="Cancel"
        //     submitButton="Send"
        //     closeEnrollModal={leaveHandler}
        //     enrollHandler={closeMailModal}
        //   />
        // }
      />

      <ModalComponent
        header="Discard"
        closeEnrollModal={closeDiscardModal}
        showModal={showDiscardModal}
        mainBody={
          <div className="md:p-[9rem] px-2 py-6 text-center">
            <p className="md:text-base text-sm pt-3 font-black">
              Are you sure you want to discard this mail?
            </p>
          </div>
        }
        footer={
          <Footer
            closeEnrollModal={closeDiscardModal}
            enrollHandler={yesDiscardModal}
            submitButton="Yes"
            closeButton="No"
          />
        }
      />
    </>
  );
}

export default ModalSection;
