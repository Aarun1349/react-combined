import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {AiOutlineCloseCircle,AiOutlineCheckCircle} from 'react-icons/ai'
function ComponentModal(props) {
  const { show, toggleModal, showMessage, message } = props;
    console.log(message)

  return (
    <Modal show={show} onHide={toggleModal} backdrop="static" style={{marginTop:"320px"}} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}      
        
    </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
        <AiOutlineCloseCircle/>
        </Button>
        <Button variant="primary" onClick={()=>{
            showMessage(message)
        }}><AiOutlineCheckCircle/></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ComponentModal;
