import React, { useState } from 'react'
import Footer from '../../../../components/modal/footer'
import ModalComponent from '../../../../components/modal/modal'
import ProgramDetailBody from './programDetailBody'
import ProgramDetailNav from './programDetailNav'

function ProgramDetail({ leaveAccept, showModal1, closeDetailModal}) {
  const [showLeaveModal, setShowLeaveModal] = useState(false)
const detailLeaveHandler=()=>{
  setShowLeaveModal(true)
  closeDetailModal()
}


  const leaveHandler =()=>{
    setShowLeaveModal(false)
    leaveAccept()
}
const closeLeaveModal =()=>{
  setShowLeaveModal(false)
}
  return (
    <>
    <ModalComponent header="Program Detail" closeEnrollModal={closeDetailModal} navBody={<ProgramDetailNav/>}  mainBody={<ProgramDetailBody/>} showModal={showModal1} footer={<Footer closeButton="Cancel" submitButton="Leave Program"  closeEnrollModal={closeDetailModal} enrollHandler={detailLeaveHandler} />}/>
    <ModalComponent header="Leave program" closeEnrollModal={closeLeaveModal} showModal={showLeaveModal}  mainBody={<div className="md:p-[9rem] px-2 py-6 text-center">
                      <p className="md:text-base text-sm pt-3 font-black">
                        Are you sure you want to leave this program?
                      </p>
                    </div>} footer={<Footer closeEnrollModal={closeLeaveModal} enrollHandler={leaveHandler} submitButton="Yes" closeButton="No" />} />

    </>
  )
}

export default ProgramDetail;