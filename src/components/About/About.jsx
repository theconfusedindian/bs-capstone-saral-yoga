import { Link, useNavigate } from "react-router-dom";
import "./About.scss";

export default function About() {
  const nav = useNavigate();

  // contact function
  const contactCard = (e) => {
    e.preventDefault();
    nav("/contact");
  };
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
    </div>
  );
}
