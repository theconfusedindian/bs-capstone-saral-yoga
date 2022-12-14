// Import of dependencies
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import of styling
import "./SignUp.scss";

// API
const API_URL = "http://localhost:3001";

export default function SignUp() {
  const nav = useNavigate();

  //   states
  const [suname, setSuname] = useState("");
  const [suusername, setSuUsername] = useState("");
  const [suemail, setSuEmail] = useState("");
  const [supassword, setSuPassword] = useState("");
  const [suconfirmPassword, setSuConfirmPassword] = useState("");

  const handleName = function (e) {
    setSuname(e.target.value);
  };
  const handleUserName = function (e) {
    setSuUsername(e.target.value);
  };
  const handleEmail = function (e) {
    setSuEmail(e.target.value);
  };
  const handlePassword = function (e) {
    setSuPassword(e.target.value);
  };
  const handleConfirmPassword = function (e) {
    setSuConfirmPassword(e.target.value);
  };

  //handleSignUp function
  const handleSignUp = (e) => {
    e.preventDefault();
    if (suname && suemail && suusername && supassword === suconfirmPassword) {
      console.log("Thanks for the info");
      axios.post(`${API_URL}/users`, {
        name: suname,
        username: suusername,
        email: suemail,
        password: supassword,
      });
      alert("Thanks for signing up!");
      nav("/login");
    } else {
      alert("Please check all details and try again");
    }
  };
  //   cancel button
  const cancelButton = (e) => {
    e.preventDefault();
    window.history.go(-1);
  };

  return (
    <form onSubmit={handleSignUp} className="signup__form">
      <input
        type="text"
        placeholder="your name"
        onChange={handleName}
        value={suname}
        className="signup__form--input1"
      />
      <input
        type="text"
        placeholder="username"
        onChange={handleUserName}
        value={suusername}
        className="signup__form--input2"
      />
      <input
        type="email"
        placeholder="email address"
        onChange={handleEmail}
        value={suemail}
        className="signup__form--input1"
      />
      <input
        type="text"
        placeholder="password"
        onChange={handlePassword}
        value={supassword}
        className="signup__form--input2"
      />
      <input
        type="text"
        placeholder="confirm password"
        onChange={handleConfirmPassword}
        value={suconfirmPassword}
        className="signup__form--input1"
      />
      <div className="signup__form--buttons">
        <button onClick={cancelButton} className="signup__form--cancel">
          Cancel
        </button>
        <button className="signup__form--submit">Submit</button>
      </div>
    </form>
  );
}
