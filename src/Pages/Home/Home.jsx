import aboutImg from "../../assets/images/about-cover.jpg";
import typesImg from "../../assets/images/types-cover.png";
import galleryImg from "../../assets/images/gallery-cover.jpg";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page__body">
        <div className="home-page__body--card">
          <img
            className="home-page__body--card-img"
            src={aboutImg}
            alt="image"
          />
        </div>
        <h2 className="home-page__body--title">About</h2>
      </div>
      <div className="home-page__body">
        <div className="home-page__body--card">
          <img
            className="home-page__body--card-img"
            src={typesImg}
            alt="image"
          />
        </div>
        <h2 className="home-page__body--title">Types of Yoga</h2>
      </div>
      <div className="home-page__body">
        <div className="home-page__body--card">
          <img
            className="home-page__body--card-img"
            src={galleryImg}
            alt="image"
          />
        </div>
        <h2 className="home-page__body--title">Gallery</h2>
      </div>
      <button className="home-page__body--btn">
        <h2>Book Now</h2>
      </button>
    </div>
  );
}
