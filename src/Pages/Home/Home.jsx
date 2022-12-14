// Import of dependencies
import { useNavigate } from "react-router-dom";

// Import of images
import aboutImg from "../../assets/images/about-cover.jpg";
import typesImg from "../../assets/images/types-cover.png";
import galleryImg from "../../assets/images/gallery-cover.jpg";

// Import of styling
import "./Home.scss";

export default function Home() {
  const nav = useNavigate();

  // aboutCard
  const aboutCard = (e) => {
    e.preventDefault();
    nav("/about");
  };

  // typesCard
  const typesCard = (e) => {
    e.preventDefault();
    nav("/types");
  };

  // galleryCard
  const galleryCard = (e) => {
    e.preventDefault();
    nav("/gallery");
  };

  // Book Now button func
  const Login = (e) => {
    e.preventDefault();
    nav("/login");
  };
  return (
    <div className="home-page">
      <div className="home-page__body">
        <div className="home-page__body--card" onClick={aboutCard}>
          <img
            className="home-page__body--card-img"
            src={aboutImg}
            alt="image"
          />
        </div>
        <h2 className="home-page__body--title">About</h2>
      </div>
      <div className="home-page__body">
        <div className="home-page__body--card" onClick={typesCard}>
          <img
            className="home-page__body--card-img"
            src={typesImg}
            alt="image"
          />
        </div>
        <h2 className="home-page__body--title">Types of Yoga</h2>
      </div>
      <div className="home-page__body" onClick={galleryCard}>
        <div className="home-page__body--card">
          <img
            className="home-page__body--card-img"
            src={galleryImg}
            alt="image"
          />
        </div>
        <h2 className="home-page__body--title">Gallery</h2>
      </div>
      <button className="home-page__body--btn" onClick={Login}>
        <h2>Book Now</h2>
      </button>
    </div>
  );
}
