import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Nav";
import List from "./List";
import Done from "./Done";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const localData = () => {
  const data = localStorage.getItem("myToDoList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setnote("");
  };

  const [note, setnote] = useState("");
  const [arr, setarr] = useState(localData());
  const [editBtn, seteditBtn] = useState(false);
  const [noteId, setnoteId] = useState("");
  const [color, setColor] = useState("");

  const change = (e) => {
    setnote(e.target.value);
  };

  const add = () => {
    if (!note) {
      // alert("Write text first");
      toast.warn("Enter text first", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (note && editBtn) {
      setarr(
        arr.map((val) => {
          if (val.id === noteId) {
            return { ...val, name: note, color: color };
          }
          return val;
        })
      );
      setnote("");
      setnoteId(null);
      seteditBtn(false);
    } else {
      const noteObj = {
        id: new Date().getTime().toString(),
        name: note,
        status: true,
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
        color: getColor(),
      };
      setarr([...arr, noteObj]);
      setnote("");
    }
  };

  const edit = (id) => {
    const editItem = arr.find((val) => {
      return val.id === id;
    });
    setnote(editItem.name);
    setnoteId(id);
    seteditBtn(true);
    setColor(editItem.color);
  };

  const del = (id) => {
    const upDate = arr.filter((val) => {
      return val.id !== id;
    });
    setarr(upDate);
  };

  const done = (id) => {
    setarr(
      arr.map((val) => {
        if (val.id === id) {
          if (val.status) {
            return { ...val, status: false };
          } else if (!val.status) {
            return { ...val, status: true };
          }
        }
        return val;
      })
    );
  };

  const removeAll = () => {
    const remCompleted = arr.filter((val) => {
      return val.status !== false;
    });
    setarr(remCompleted);
  };

  const getColor = () => {
    const colorList = [
      "lightseagreen",
      "lightgreen",
      "pink",
      "lightpink",
      "lightsalmon",
      "lightskyblue",
      "plum",
      "aquamarine",
      "palevioletred",
      "lemonchiffon",
      "lightblue",
    ];
    const color = colorList[Math.floor(Math.random() * colorList.length)];
    return color;
  };

  useEffect(() => {
    localStorage.setItem("myToDoList", JSON.stringify(arr));
  }, [arr]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Nav note={note} change={change} add={add} handleClose={handleClose} />

      <hr />
      <br />

      <List
        arr={arr}
        add={add}
        done={done}
        edit={edit}
        del={del}
        handleClose={handleClose}
        handleShow={handleShow}
        showModal={showModal}
        change={change}
        note={note}
        color={color}
        setnote={setnote}
        setColor={setColor}
        getColor={getColor}
      />

      <Done
        arr={arr}
        done={done}
        edit={edit}
        del={del}
        setnote={setnote}
        handleShow={handleShow}
        removeAll={removeAll}
      />
    </>
  );
};
export default App;
