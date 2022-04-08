import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { setHeaderIcon } from "../../../redux/actions";
import MenteeCard from "./menteeCard";
import MentorCard from "./mentorCard";
import AgreementModal from "./modalsection/agreementModal/agreementModal";
import CreateGoals from "./modalsection/goals/createGoals";
import Goals from "./modalsection/goals/createGoals";
import ModalSection from "./modalsection/mailModal/modalSection";

function CardToggle() {
  let history = useHistory();
  const [flag, setFlag] = useState(1);
  const [mailModal, setMailModal] = useState(false);
  const [agreementModal, setAgreementModal] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [showCreateGoalModal,setShowCreateGoalModal]= useState(false);


  const mailHandler = () => {
    setMailModal(true);
  };

  const closeAllMailModal = () => {
    setMailModal(false);
  };
  const activeHandler = (values) => {
    setFlag(values);
  };
  const openAgreementModal = (value) => {
    setCardData(value);
    setAgreementModal(true);
  };
  const closeAgreementModal = () => {
    setAgreementModal(false);
  };
  const handlerCreateGoal = () => {
    console.log("true")
    setShowCreateGoalModal(true);

  };
  const closeCreateGoalModal =() => {
    setShowCreateGoalModal(false);
  }
  return (
    <>
      <ModalSection
        showModal={mailModal}
     
        closeAllMailModal={closeAllMailModal}
        setMailModal={setMailModal}
      />
      <AgreementModal
        showModal={agreementModal}
        closeAgreementModal={closeAgreementModal}
        cardData={cardData}
      />
      <CreateGoals showModal={showCreateGoalModal} closeCreateGoalModal={closeCreateGoalModal} />

      <div className="inline-flex gap-3">
        <div
          className={
            flag === "MyMentees"
              ? " border-b-2 border-[#0F69AF] text-[#0F69AF] font-black px-5 py-3"
              : flag === "MyMentors"
              ? "px-5 py-3"
              : flag === "FindaMentor"
              ? "px-5 py-3"
              : " border-b-2 border-[#0F69AF] text-[#0F69AF] font-black px-5 py-3"
          }
        >
          <div className="">
            <p
              className=" cursor-pointer "
              value="MyMentees"
              onClick={() => activeHandler("MyMentees")}
            >
              My Mentees
            </p>
          </div>
        </div>
        <div
          className={
            flag === "MyMentors"
              ? " border-b-2 border-[#0F69AF] text-[#0F69AF] font-black px-5 py-3"
              : flag === "MyMentees"
              ? "px-5 py-3"
              : flag === "FindaMentor"
              ? "px-5 py-3"
              : "  px-5 py-3"
          }
        >
          <div className="">
            <p
              className=" cursor-pointer "
              value="MyMentors"
              onClick={() => activeHandler("MyMentors")}
            >
              My Mentors
            </p>
          </div>
        </div>
        <div
          className={
            flag === "FindaMentor"
              ? " border-b-2 border-[#0F69AF] text-[#0F69AF] font-black px-5 py-3"
              : flag === "MyMentors"
              ? "px-5 py-3"
              : flag === "MyMentees"
              ? "px-5 py-3"
              : " px-5 py-3"
          }
        >
          <div className="">
            <p
              className=" cursor-pointer "
              value="FindaMentor"
              onClick={() => activeHandler("FindaMentor")}
            >
              Find a Mentor
            </p>
          </div>
        </div>
      </div>

      {flag === "MyMentees" ? (
        <MenteeCard
          mailHandler={mailHandler}
          openAgreementModal={openAgreementModal}
          handlerCreateGoal={handlerCreateGoal}
        />
      ) : flag === "MyMentors" ? (
        <MentorCard
          mailHandler={mailHandler}
          openAgreementModal={openAgreementModal}
          handlerCreateGoal={handlerCreateGoal}
        />
      ) : flag === "FindaMentor" ? (
        ""
      ) : (
        <MenteeCard
          mailHandler={mailHandler}
          openAgreementModal={openAgreementModal}
          handlerCreateGoal={handlerCreateGoal}
        />
      )
      
      }
    </>
  );
}

export default CardToggle;
