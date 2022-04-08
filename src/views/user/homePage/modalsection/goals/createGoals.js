import React, { useState } from "react";
import ModalComponent from "../../../../../components/modal/modal";
import { VscDiffAdded } from "react-icons/vsc";
import GoalBody from "./goalBody";
import Footer from "../../../../../components/modal/footer";
import GoalApi from "./goalApi";

function CreateGoals({ closeCreateGoalModal, showModal }) {
  const [showGoalNodal, setShowGoalNodal] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const handlerGoal = () => {
    setShowGoalNodal(true);
  };
  const closerGoalNodal = () => {
    setShowGoalNodal(false);
  };
  const saveGoalModal = () => {
    setCreateNew(false);
  };
  const createhandler = () => {
    setCreateNew(true);
  };

  return (
    <>
      <ModalComponent
        header="Goals"
        closeEnrollModal={closeCreateGoalModal}
        showModal={showModal}
        mainBody={
          createNew === true ? (
            <GoalBody closeCreateGoalModal={closeCreateGoalModal} saveGoalModal={saveGoalModal}/>
            ) : (
              <GoalApi createhandler={createhandler} />
          )
        }
      />
    </>
  );
}

export default CreateGoals;
