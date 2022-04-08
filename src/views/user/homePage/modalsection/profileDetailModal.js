import React from "react";
import ModalComponent from "../../../../components/modal/modal";
import ProfileDetailMainBody from "./profileDetailMainBody";

function ProfileDetailModal({
  showmodal2,
  closeProfileDetailModal,
  tableData,
}) {
  return (
    <>
      <ModalComponent
        header="Profile details"
        closeEnrollModal={closeProfileDetailModal}
        mainBody={<ProfileDetailMainBody data={tableData}/>}
        showModal={showmodal2}
      />
    </>
  );
}

export default ProfileDetailModal;
