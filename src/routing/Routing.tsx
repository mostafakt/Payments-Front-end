import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/log" element=<Login /> />
      </Routes>
    </>
  );
};

export default Routing;
