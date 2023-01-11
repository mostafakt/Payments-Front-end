import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Salaries from "../Pages/Salaries";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/log" element=<Login /> />
        <Route path="/main" element=<Salaries /> />
      </Routes>
    </>
  );
};

export default Routing;
