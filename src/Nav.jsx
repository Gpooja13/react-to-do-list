import React from 'react';
import GetDate from "./GetDate";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";

function Nav(props) {
  return (
  <nav className="navBar">
    <div className="my-3 mx-5 center mainHead">
      <img className="logo" src="Images/logo.png" alt="Logo" />
      <span className="name">Keep</span>
    </div>

    <div className="center writeUp">
      <textarea
        className="form-control"
        placeholder="Write your note"
        value={props.note}
        onChange={props.change}
      />

      <div className="addBtn center">
        <OverlayTrigger
          placement="right"
          delay={{ show: 1000, hide: 400 }}
          overlay={<Tooltip id="add-tooltip">Add</Tooltip>}
        >
          <AddIcon
            fontSize="large"
            onClick={() => {
              props.add();
              props.handleClose();
            }}
          />
        </OverlayTrigger>
      </div>
    </div>

    <div className="mx-5 getDate">
      <GetDate />
    </div>
  </nav>

  )
}

export default Nav;