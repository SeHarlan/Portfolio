import React from 'react';
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

export default function ResumeModal({page}: {page?: boolean}) {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-div">
      <div className="resume-button-container">
        {page && (<label htmlFor="resume"><h2>View Scott's Resume</h2></label>)}
        <button className="resume" id="resume" onClick={openModal}>
          <img src="/images/resume-icon.png" alt="resume" />
        </button>

      </div>
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