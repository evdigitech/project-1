import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Footer from '../../../components/modal/footer'
import ModalComponent from '../../../components/modal/modal'

function LeaveModal({closeLeaveModal, leaveAccept, showModal1}) {

const leaveHandler =()=>{
    closeLeaveModal()
    leaveAccept()
}

  return (
    
    <>
    <ModalComponent closeEnrollModal={closeLeaveModal} showModal={showModal1} header=" Leave program"  mainBody={<div className="md:p-[9rem] px-2 py-6 text-center">
                      <p className="md:text-base text-sm pt-3 font-black">
                        Are you sure you want to leave this program?
                      </p>
                    </div>} footer={<Footer closeEnrollModal={closeLeaveModal} enrollHandler={leaveHandler} submitButton="Yes" closeButton="No" />} />

   
    </>
  )
}

export default LeaveModal