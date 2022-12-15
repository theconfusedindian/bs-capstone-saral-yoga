import arrowIcon from "../../assets/icons/arrow-right-.svg";
import appleIcon from "../../assets/icons/ri_apple-fillapple.svg";
import googleIcon from "../../assets/icons/mdi_google-plusgplus.svg";

// Import of dependencies
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import of styling
import "./Login.scss";
import SignUp from "../SignUp/SignUp";

export default function Login() {
  const nav = useNavigate();

  //   useStates for username and password and create functions
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = function (e) {
    setUserName(e.target.value);
  };
  const handlePassword = function (e) {
    setPassword(e.target.value);
  };

  //   handleOnSubmit
  const handleLogin = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("You mush provide both username and password!");
    } else {
      nav("/book-now");
    }
  };

  // guestCard
  const guestCard = (e) => {
    e.preventDefault();
    nav("/book-now");
  };

  return (
    <div className="LPage">
      <div>
        <h3 className="LPage__title">Use email & password</h3>
        <form onSubmit={handleLogin} className="LPage__form">
          <div className="LPage__form--nameBox">
            {/* <label className="LPage__form--nameBox--label" htmlFor="login">
            email/username
          </label> */}
            <input
              className="LPage__form--nameBox--input"
              type="text || email"
              onChange={handleUserName}
              placeholder="username or email"
            />
          </div>
          <div className="LPage__form--pwdBox">
            {/* <label className="LPage__form--pwdBox--label" htmlFor="login">
            password
          </label> */}
            <input
              type="password"
              className="LPage__form--pwdBox--input"
              onChange={handlePassword}
              placeholder="password"
            />
          </div>
          <p>
            *Don't have an account?
            <span>
              <a href="/signup">SignUp</a>
            </span>{" "}
            instead or see below for other options*
          </p>
          <button type="submit" className="LPage__form--arrow">
            <img src={arrowIcon} alt="login-img" />
          </button>
        </form>
      </div>
      <div className="LPage__other">
        <h3 className="LPage__title">Other ways to login</h3>
        <div className="LPage__other--options">
          <button className="LPage__other--guest" onClick={guestCard}>
            Continue as a guest
          </button>
          <img
            src={googleIcon}
            alt="google-icon"
            className="LPage__other--google"
          />
          <img
            src={appleIcon}
            alt="apple-icon"
            className="LPage__other--apple"
          />
        </div>
      </div>
    </div>
  );
}
