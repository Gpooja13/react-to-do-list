import React from 'react';
import Modal1 from "./Modal1";
import {OverlayTrigger, Tooltip } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { Fieldset } from "primereact/fieldset";

const Done = (props) => {
  return (
    <div>
    <br />
    <div className="card">
    <Fieldset legend=" Task Completed" toggleable>
      <div className="m-0">
        <div className="grid">
          {props.arr.reverse().map((val) => {
            const line = !val.status ? "line-through" : "none";
            if (val.status === false) {
              return (
                <div
                  className="note item1"
                  style={{ backgroundColor: val.color }}
                >
                  <div className="done disHide">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 1000, hide: 400 }}
                      overlay={
                        <Tooltip id="add-tooltip">Mark undone</Tooltip>
                      }
                    >
                      <CheckCircleOutlineIcon
                        className="left btns"
                        fontSize="small"
                        onClick={() => {
                            props.done(val.id);
                        }}
                      />
                    </OverlayTrigger>
                  </div>

                  <div
                    className="textPart p-2"
                    style={{ textDecoration: line }}
                    onClick={() => {
                      props.edit(val.id);
                      props.handleShow();
                    }}
                  >
                    {val.name}
                  </div>
                  <div className="center">
                    <span className="date p-2">
                      {val.date} | {val.time}
                    </span>
                    <div>
                      <div className="noteBtn center">
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 1000, hide: 400 }}
                          overlay={
                            <Tooltip id="add-tooltip">Delete</Tooltip>
                          }
                        >
                          <DeleteIcon
                            className="right m-1 btns"
                            onClick={() => {
                                props.del(val.id);
                            }}
                          />
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 1000, hide: 400 }}
                          overlay={
                            <Tooltip id="add-tooltip">Edit</Tooltip>
                          }
                        >
                          <EditIcon
                            className="right m-1 btns"
                            onClick={() => {
                                props.edit(val.id);
                                props.handleShow();
                            }}
                          />
                        </OverlayTrigger>
                        <div className="disHide2">
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 1000, hide: 400 }}
                          overlay={
                            <Tooltip id="add-tooltip">Mark done</Tooltip>
                          }
                        >
                          <BookmarkRemoveIcon
                            className="btnGap btns"
                            onClick={() => {
                              props.done(val.id);
                              props.setnote("");
                            }}
                          />
                        </OverlayTrigger>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="center">
        <Modal1 removeAll={props.removeAll} arr={props.arr} />
      </div>
    </Fieldset>
  </div>
  </div>
  )
}

export default Done;