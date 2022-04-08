import React from 'react'
import Footer from '../../../../../components/modal/footer'
import ModalComponent from '../../../../../components/modal/modal'
import ModalBody from './modalBody'

function AgreementModal(props) {
  const { showModal, closeAgreementModal, cardData }= props
  return (
    <>
    <ModalComponent   header="Mentoring Agreement"
        closeEnrollModal={closeAgreementModal}
        mainBody={<ModalBody cardData={cardData} />}
        showModal={showModal}
        />
    </>
  )
}

export default AgreementModal