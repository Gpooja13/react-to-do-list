import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MyModal = ({ showModal, handleClose, removeAll }) => {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal1'>Remove All</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select "Remove All" to remove all completed notes</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={()=>{
            removeAll();
            handleClose();
            }}>
            Remove All
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

export default MyModal;