import { Link } from "react-router-dom";

// import of styling
import "./Footer.scss";

// Import of SVG Images
import Insta from "../../assets/icons/Icon-instagram.svg";
import FB from "../../assets/icons/Icon-facebook.svg";
import Twitter from "../../assets/icons/Icon-twitter.svg";
import Contact from "../Contact-Form/Contact";

export default function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendEmail = (mailto) => {
    var mail = "mailto:yogi.harpreet@gmail.com";
    var a = document.createElement("a");
    a.href = mail;
    a.click();
  };

  return (
    <div className="siteFooter">
      <div className="siteFooter__title">
        <h1>
          {/* <Link to={<Contact />}> */}
          Get in touch
          {/* </Link> */}
        </h1>
      </div>
      <div className="siteFooter__social">
        <a href="http://instagram.com">
          <img src={Insta} alt="insta" className="siteFooter__social--icon" />
        </a>
        <a href="http://facebook.com">
          <img src={FB} alt="facebook" className="siteFooter__social--icon" />
        </a>
        <a href="http://twitter.com">
          <img
            src={Twitter}
            alt="twitter"
            className="siteFooter__social--icon"
          />
        </a>
      </div>
      <div className="siteFooter__contact">
        <p className="siteFooter__contact--yogi">Yogi Harpreet Vohra</p>
        {/* <p className="siteFooter__contact--address">304-1260 Nelson St</p>
        <p className="siteFooter__contact--address">Vancouver BC V6E 1J7</p> */}
        <button
          className="siteFooter__contact--email"
          onClick={(e) => {
            e.preventDefault();
            sendEmail("yogi.harpreet@gmail.com");
          }}
        >
          yogi.harpreet@gmail.com
        </button>
        <p className="siteFooter__contact--phone">+1 (604) 721-6322</p>
      </div>
      <div className="siteFooter__other">
        {/* <div className="siteFooter__other--box"> */}
        <div className="siteFooter__other--item">Research</div>
        <div className="siteFooter__other--item">Blog</div>
        {/* </div> */}
        {/* <div className="siteFooter__other--box"> */}
        <div className="siteFooter__other--item">Careers</div>
        <div className="siteFooter__other--item">Donate</div>
        {/* </div> */}
      </div>
      <div className="siteFooter__credits">
        <p className="siteFooter__credits--cr">©2022 Saral-Yoga</p>
        <button
          type="button"
          className="siteFooter__credits--cr"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = openInNewTab(
              "https://www.privacypolicies.com/live/a4f9814e-f036-4b1a-a1dc-8ca431f9d9aa"
            );
          }}
        >
          Privacy Policy
        </button>
        {/* <p className="siteFooter__credits--cr">Privacy Policy</p> */}
      </div>
    </div>
  );
}

// Privacy policy: https://www.privacypolicies.com/live/a4f9814e-f036-4b1a-a1dc-8ca431f9d9aa
