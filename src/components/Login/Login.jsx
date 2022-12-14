// Import of dependencies
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import of styling
import "./Login.scss";

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
      <form onSubmit={handleLogin} className="LPage_form">
        <div className="LPage__form--nameBox">
          <label className="LPage__form--nameBox--label" htmlFor="login">
            email/username
          </label>
          <input
            className="LPage__form--nameBox--input"
            type="text || email"
            onChange={handleUserName}
            placeholder="username or email"
          />
        </div>
        <div className="LPage__form--pwdBox">
          <label className="LPage__form--pwdBox--label" htmlFor="login">
            password
          </label>
          <input
            className="LPage__form--pwdBox--input"
            onChange={handlePassword}
            placeholder="password"
          />
        </div>
        <button>Login</button>
      </form>
      <button onClick={guestCard}>Continue as a guest</button>
    </div>
  );
}
