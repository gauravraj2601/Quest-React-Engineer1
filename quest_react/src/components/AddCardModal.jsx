import React, { useState } from 'react';
import Modal from 'react-modal';
import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding: '20px',
    border: 'none',
    backgroundColor: 'white',
    maxWidth: '400px',
  },
};

const AddCardModal = ({ modalIsOpen, setIsOpen, addProject }) => {
    const [projectName, setProjectName] = useState('');
    const [messageCount, setMessageCount]= useState('');

  function closeModal() {
    setIsOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addProject(projectName, messageCount);
    setProjectName('');
    setMessageCount('')

    closeModal();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalHeader>
          <h2>Add a Card</h2>
          <CloseButton onClick={closeModal}>
            <RxCross2 size={25} />
          </CloseButton>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
            <label> Project Name </label> <br />
          <input type='text' onChange={(e)=>setProjectName(e.target.value)} required/>
          <br />
          <label>Message</label> <br />
          <input type="number" onChange={(e)=>setMessageCount(e.target.value)}  />
          <br />
          <SubmitButton type='submit' >Add</SubmitButton>
          
        </form>
      </ModalContainer>
    </Modal>
  );
};

export default AddCardModal;

const ModalContainer = styled.div`
   form label{
        font-weight: 500;
    }
    form input{
      padding: 3px;
    }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;
const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;