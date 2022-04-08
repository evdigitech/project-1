import React from "react";
import Footer from "../../../../components/modal/footer";
import ModalComponent from "../../../../components/modal/modal";
import EnrollModalBody from "../../programs/enrollModal/enrollModalBody";
import NavBody from "../../programs/enrollModal/navBody";

import "../../../../assets/css/enrollModal.css";

function Questionnairesmodal({ showModal, closeQuestionnairesmodal }) {
  return (
    <>
      <ModalComponent
        header="Questionnaires"
        closeEnrollModal={closeQuestionnairesmodal}
        navBody={<NavBody />}
        mainBody={<EnrollModalBody />}
        showModal={showModal}
        footer={
          <Footer
            closeButton="Cancel"
            submitButton="Save"
            closeEnrollModal={closeQuestionnairesmodal}
            enrollHandler={closeQuestionnairesmodal}
          />
        }
      />
    </>
  );
}

export default Questionnairesmodal;
