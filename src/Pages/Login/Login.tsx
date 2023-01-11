import React, { useState } from "react";
import "./Login.css";
import { Container } from "./Login.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const gitHeader = () => {
  return {
    Authorization: /*"Token " + localStorage.getItem("token")*/ `Token 5578d3bc1838429828f47c5763cca56ec2e36fbe`,
  };
};
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate( );
  const submit = async () => {
    await axios
      .post("http://127.0.0.1:8000/api-token-auth/", {
        username: userName,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
