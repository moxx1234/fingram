import React from "react";
import Budget from "../../components/main/budget";

const Main = () => {
  return (
    <>
      <div className="stats">
        <Budget />
        <div className="stats__detailed"></div>
      </div>
    </>
  );
};

export default Main;
