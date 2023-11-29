import React, { useEffect, useState } from "react";
import MyModal from "./MyModal1";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Modal1 = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [disabled,setDisabled]=useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const removeAllwarn = () => {
    const completed = props.arr.filter((val) => {
    if (val.status === false) {
      return val;
    }
    else{
      return null;
    }});
    
    if (completed.length === 0) {
    setDisabled(true);
    } 
    else {
    setDisabled(false);
    };
    }
    
    useEffect(()=>{
removeAllwarn();
    },[props.arr]);

  return (
    <div>
      <Button
      className="removeBtn"
        variant="dark"
        disabled={disabled}
        onClick={handleShow}>
        Remove All
      </Button>

      <MyModal
        showModal={showModal}
        handleClose={handleClose}
        removeAll={props.removeAll}
      />
    </div>
  );
};

export default Modal1;
