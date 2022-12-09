// Import of dependencies
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import { send } from "emailjs-com";

// import of styles
import "./Contact.scss";

// call of variables for emailJS IDs
const serviceID = "service_2js51pv";
const templateID = "template_c8wa585";
const publicKey = "y_SvQKPx9DbDPRyYO";

export default function Contact() {
  const nav = useNavigate();

  // Cancel button func
  const CancelButton = (e) => {
    e.preventDefault();
    nav("/");
  };

  // pass states and actions to child components
  const [toSend, setToSend] = useState({
    your_name: "",
    reply_to: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("AM I WORKING");
    emailjs.send(serviceID, templateID, useState, publicKey).then(
      function (response) {
        console.log(
          "Your message has been recorded!",
          response.status,
          response.text
        );
        nav("/");
      },
      function (error) {
        console.log("There is an error, please check your inputs!", error);
      }
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact" onSubmit={onSubmit}>
      <div className="contact__item">
        <label className="contact__item--label" htmlFor="Name">
          <h3>Name</h3>
        </label>
        <input
          className="contact__item--input"
          placeholder="your name"
          type="text"
          name="your_name"
          value={toSend.your_name}
          onChange={handleChange}
        />
      </div>
      <div className="contact__item">
        <label className="contact__item--label" htmlFor="Email">
          <h3>Email</h3>
        </label>
        <input
          className="contact__item--input"
          type="email"
          name="reply_to"
          placeholder="your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
      </div>
      <div className="contact__item">
        <label className="contact__item--label" htmlFor="Message">
          <h3> Message</h3>
        </label>
        <textarea
          className="contact__item--t-area"
          name="message"
          placeholder="Please leave your message"
          value={toSend.message}
          onChange={handleChange}
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="contact__button">
        <button className="contact__button--cancel" onClick={CancelButton}>
          <h3>Cancel</h3>
        </button>
        <button type="submit" className="contact__button--submit">
          <h3>Send Message</h3>
        </button>
      </div>
    </form>
  );
}
