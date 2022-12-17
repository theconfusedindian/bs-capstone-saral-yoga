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
  const API_URL = "http://localhost:3001";

  //   useStates for username and password and create functions
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const handleUsername = function (e) {
    setUsername(e.target.value);
  };
  const handlePassword = function (e) {
    setPassword(e.target.value);
  };

  //   handleOnSubmit
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("You mush provide both username and password!");
    } else {
      axios
        .post(`${API_URL}/users/login`, {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          nav("/book-now");
          console.log(userData);
        });
    }
  };

  // guestCard
  const guestCard = (e) => {
    e.preventDefault();
    nav("/book-now");
  };

  return (
    <div className="LPage">
      <p>
        *Don't have an account?
        <span>
          {" "}
          <a href="/signup">SignUp</a>
        </span>{" "}
        instead or see below for other options*
      </p>
      <div>
        <form onSubmit={handleLogin} className="LPage__form">
          <div className="LPage__form--nameBox">
            <input
              className="LPage__form--nameBox--input"
              type="username"
              onChange={handleUsername}
              value={username}
              placeholder="username"
            />
          </div>
          <div className="LPage__form--pwdBox">
            <input
              type="password"
              className="LPage__form--pwdBox--input"
              onChange={handlePassword}
              value={password}
              placeholder="password"
            />
          </div>

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
