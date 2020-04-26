import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root')

export default function ResumeModal() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-div">
      <button className="resume" onClick={openModal}><img src="/images/resume-icon.png" alt="resume" /></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Resume Modal"
      >
        <img className="resumeImage" src="/images/ScottHarlanResume.png" alt="Scott Harlan Resume" />
        <button className="modal-button" onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
}