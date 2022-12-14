import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isPropertySignature } from "typescript";
import "./About.scss";

export default function About() {
  const nav = useNavigate();
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const API_URL = "http://localhost:3001";

  // import data from axios on get request
  const getReviewsData = async () => {
    await axios.get(`${API_URL}/reviews`).then((response) => {
      // console.log("reviews data", response.data);
      setReviews(response.data);
    });
  };

  // states for submit review
  const [newReview, setNewReview] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // adding functions to states
  const handleNewReview = function (e) {
    setNewReview(e.target.value);
  };
  const handleNewName = function (e) {
    setNewName(e.target.value);
  };
  const handleNewEmail = function (e) {
    setNewEmail(e.target.value);
  };

  // post data to axios
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (newReview && newName && newEmail) {
      axios
        .post(`${API_URL}/reviews`, {
          name: newName,
          email: newEmail,
          review: newReview,
        })
        .then(() => {
          console.log("Thanks for your review!");
          setNewEmail("");
          setNewName("");
          setNewReview("");
        });
    } else {
      console.log("Please complete all fields");
    }
  };

  // cencel button
  const Cancel = (e) => {
    setNewEmail("");
    setNewName("");
    setNewReview("");
  };
  // contact function
  const contactCard = (e) => {
    e.preventDefault();
    nav("/contact");
  };

  useEffect(() => {
    getReviewsData();
  }, []);

  return (
    <div className="aboutPage">
      <img className="aboutPage__yogi" src="" alt="yogi-image" />
      <article className="aboutPage__intro">
        <p>
          Hello! I am Harpreet, I started practicing yoga in 2014, when I was
          going through a major life change that affected me deeply. Yoga is
          something that keeps me sane. I have completed my yoga teacher
          training in{" "}
          <a href="http://www.ashtangayogamysore.net/">Ashtanga Yoga</a> from
          Mysore, India in 2018. The reason I wanted to pursue the teacher
          training course was to expand my knowledge about Yoga, not only the
          physical aspects but more so the spiritual aspect. The philosophy
          behind it is so strong and often overlooked in our practice, but that
          is what fascinates me. I like reading The Yoga Sutras and I believe
          there's something I learn everyday from it.
        </p>
        <p>
          I believe there's a time for everything, and when the time is right
          the opportunity will present itself. I put off teaching for many years
          because of my own insecurities. However, I feel ready at this point in
          my life and I am learning to believe in myself and embrace my
          vulnerability which is what Yoga is all about.
        </p>
        <p>
          I enjoy teaching grounding simplistic Yoga combined with breathing
          exercises ("Pranayama")
        </p>
      </article>
      <button className="aboutPage__connect" onClick={contactCard}>
        <h2 className="aboutPage__reachOut--button">Contact</h2>
      </button>
      <div className="aboutPage__comments">
        <h1 className="aboutPage__comments--title">Reviews </h1>
        <div className="aboutPage__comments--box">
          <div className="aboutPage__comments--review">
            {reviews && reviews[0].review}
          </div>
          <div className="aboutPage__comments--name">
            --{reviews && reviews[0].name}
          </div>
        </div>
        <div className="aboutPage__comments--box">
          <div className="aboutPage__comments--review">
            {reviews && reviews[1].review}
          </div>
          <div className="aboutPage__comments--name">
            --{reviews && reviews[1].name}
          </div>
        </div>

        <form className="aboutPage__review" onSubmit={handleOnSubmit}>
          <textarea
            value={newName}
            onChange={handleNewName}
            className="aboutPage__review--reviewer"
            placeholder="your name"
          />
          <textarea
            value={newEmail}
            onChange={handleNewEmail}
            className="aboutPage__review--email"
            type="email"
            placeholder="enter your email"
          ></textarea>
          <textarea
            value={newReview}
            onChange={handleNewReview}
            type="text"
            className="aboutPage__review--t-area"
            name="reviews"
            placeholder="Leave a review"
            cols="30"
            rows="5"
          ></textarea>

          <div className="aboutPage__review--button">
            <button className="aboutPage__review--button--cancel">
              <h3>Cancel</h3>
            </button>
            <button type="submit" className="aboutPage__review--button--submit">
              <h3>Submit</h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
