import React from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const Modal2 = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <textarea
            className="edit-form"
            placeholder="Write your note"
            value={props.note}
            onChange={props.change}
            onClick={props.handleShow}
            style={{ backgroundColor: props.color }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <OverlayTrigger
          placement="top"
          delay={{ show: 1000, hide: 400 }}
          overlay={<Tooltip id="add-tooltip">Cancel</Tooltip>}
        >
          <CancelIcon
            className="btnGap btns"
            fontSize="large"
            onClick={props.handleClose}
          />
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 1000, hide: 400 }}
          overlay={<Tooltip id="add-tooltip">Change Color</Tooltip>}
        >
          <ColorLensIcon
            className="btnGap btns"
            fontSize="large"
            onClick={() => {
              let c = props.getColor();
              props.setColor(c);
            }}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          delay={{ show: 1000, hide: 400 }}
          overlay={<Tooltip id="add-tooltip">Save</Tooltip>}
        >
          <AssignmentTurnedInIcon
            className="btnGap btns"
            fontSize="large"
            onClick={() => {
              props.add();
              props.handleClose();
            }}
          />
        </OverlayTrigger>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal2;
