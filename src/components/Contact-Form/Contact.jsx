import { useNavigate } from "react-router-dom";

import "./Contact.scss";

export default function Contact() {
  const Nav = useNavigate();
  // Cancel button func
  const CancelButton = (e) => {
    e.preventDefault();
    Nav("/");
  };

  //   // Message sent function
  //   const handleOnSubmit = function (e) {
  //     e.preventDefault();
  //     if (!e.target.videoTitle.value || !e.target.videoDesc.value) {
  //       alert("Message has been recorded");
  //     } else {
  //       const newMessage = {
  //         Nam: e.target.name.value,
  //         description: e.target.videoDesc.value,
  //       };
  //       axios.post(`${API_URL}`, newVideoInfo).then(() => {
  //         alert("Your video has been submitted");
  //         Nav("/");
  //       });
  //     }
  //   };

  return (
    <form className="contact">
      <div className="contact__item">
        <label className="contact__item--label" htmlFor="Name">
          <h3>Name</h3>
        </label>
        <input
          className="contact__item--input"
          type="text"
          placeholder="your name"
        />
      </div>
      <div className="contact__item">
        <label className="contact__item--label" htmlFor="Email">
          <h3>Email</h3>
        </label>
        <input
          className="contact__item--input"
          type="email"
          placeholder="youremail@domain.com"
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
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="contact__button">
        <button className="contact__button--cancel" onClick={CancelButton}>
          <h3>Cancel</h3>
        </button>
        <button className="contact__button--submit">
          <h3>Send Message</h3>
        </button>
      </div>
    </form>
  );
}
