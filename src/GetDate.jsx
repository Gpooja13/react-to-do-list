import React, { useState } from "react";

const GetDate = () => {
  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setDate(new Date().toDateString());
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <div className="navT">
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </>
  );
};

export default GetDate;
